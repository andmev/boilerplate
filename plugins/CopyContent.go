package plugins

import (
	"fmt"
	"github.com/evanw/esbuild/pkg/api"
	"io"
	"os"
	"path/filepath"
)

func copyFiles(src, dst string) error {
	// Check if the src is a file or a directory
	srcInfo, err := os.Stat(src)
	if err != nil {
		return err
	}

	if !srcInfo.IsDir() {
		// src is a file, so just copy it
		return copyFile(src, dst)
	}

	err = os.RemoveAll(dst)
	if err != nil {
		return err
	}

	if _, err := os.Stat(dst); os.IsNotExist(err) {
		if err = os.MkdirAll(dst, 0755); err != nil {
			return err
		}
	}

	// Recursively copy the contents of the directory
	return copyDir(src, dst)
}

func copyFile(source string, dst string) (err error) {
	sourceFile, err := os.Open(source)
	if err != nil {
		return err
	}

	defer sourceFile.Close()

	_, err = os.Stat(filepath.Dir(dst))

	if err != nil {
		if os.IsNotExist(err) {
			os.MkdirAll(filepath.Dir(dst), 0766)
		} else {
			return err
		}
	}

	destFile, err := os.Create(dst)
	if err != nil {
		return err
	}

	defer destFile.Close()

	_, err = io.Copy(destFile, sourceFile)
	if err == nil {
		sourceInfo, err := os.Stat(source)
		if err != nil {
			err = os.Chmod(dst, sourceInfo.Mode())
		}

	}

	return
}

func copyDir(source string, dest string) (err error) {

	// get properties of source dir
	sourceInfo, err := os.Stat(source)
	if err != nil {
		return err
	}

	// create dest dir
	err = os.MkdirAll(dest, sourceInfo.Mode())
	if err != nil {
		return err
	}

	directory, _ := os.Open(source)

	objects, err := directory.Readdir(-1)

	for _, obj := range objects {

		sourceFilePointer := filepath.Join(source, obj.Name())

		destinationFilePointer := filepath.Join(dest, obj.Name())

		if obj.IsDir() {
			// create sub-directories - recursively
			err = copyDir(sourceFilePointer, destinationFilePointer)
			err = copyDir(sourceFilePointer, destinationFilePointer)
			if err != nil {
				fmt.Println(err)
			}
		} else {
			// perform copy
			err = copyFile(sourceFilePointer, destinationFilePointer)
			if err != nil {
				fmt.Println(err)
			}
		}

	}
	return
}

func CopyContent(from, to string) api.Plugin {
	return api.Plugin{
		Name: "CopyContent",
		Setup: func(build api.PluginBuild) {
			build.OnEnd(func(result *api.BuildResult) {
				if result.Errors == nil {
					err := copyFiles(from, to)
					if err != nil {
						fmt.Println(err)
					}
				}
			})
		},
	}
}
