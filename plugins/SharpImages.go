package plugins

import (
	"fmt"
	"github.com/evanw/esbuild/pkg/api"
	"github.com/h2non/bimg"
	"os"
)

func SharpImages(from, to string) api.Plugin {
	return api.Plugin{
		Name: "SharpImage",
		Setup: func(build api.PluginBuild) {
			if _, err := os.Stat(to); os.IsNotExist(err) {
				os.MkdirAll(to, 0755)
			}
			// Open the directory using the os.Open function
			dir, err := os.Open(from)
			if err != nil {
				fmt.Println(err)
				return
			}
			defer dir.Close()

			// Get a list of files in the directory using the Readdir function
			files, err := dir.Readdir(-1)
			if err != nil {
				fmt.Println(err)
				return
			}

			// Loop through the files and print their names
			for _, file := range files {
				filePath := from + "/" + file.Name()
				fileOutPath := to + "/" + file.Name()

				buffer, err := bimg.Read(filePath)
				if err != nil {
					fmt.Fprintln(os.Stderr, err)
				}

				newImage, err := bimg.NewImage(buffer).Resize(800, 600)
				if err != nil {
					fmt.Fprintln(os.Stderr, err)
				}

				bimg.Write(fileOutPath, newImage)
			}
		},
	}
}
