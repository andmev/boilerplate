package plugins

import (
	"fmt"
	"github.com/evanw/esbuild/pkg/api"
	"github.com/h2non/bimg"
	"os"
	"path/filepath"
)

type ImageSize struct {
	Size int
	Name string
}

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

				buffer, err := bimg.Read(filePath)
				if err != nil {
					fmt.Fprintln(os.Stderr, err)
				}

				sizes := []ImageSize{
					{Size: 375, Name: "small"},
					{Size: 640, Name: "medium"},
					{Size: 1024, Name: "large"},
					{Size: 0, Name: "original"},
				}
				for _, conf := range sizes {
					if conf.Size == 0 {
						err = bimg.Write(to+"/"+file.Name(), buffer)
						continue
					}

					options := bimg.Options{
						Width:       conf.Size,
						Quality:     80,
						Compression: 6,
						Gravity:     bimg.GravitySmart,
						Interlace:   true,
					}

					newImage, err := bimg.NewImage(buffer).Process(options)
					if err != nil {
						fmt.Fprintln(os.Stderr, err)
					}

					fileExtension := filepath.Ext(file.Name())
					fileName := file.Name()[0 : len(file.Name())-len(fileExtension)]

					fileOutPath := to + "/" + fileName + "-" + fmt.Sprint(conf.Name) + fileExtension

					bimg.Write(fileOutPath, newImage)
				}
			}
		},
	}
}
