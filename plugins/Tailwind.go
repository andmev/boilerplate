package plugins

import (
	"github.com/evanw/esbuild/pkg/api"
	"log"
	"os/exec"
)

var Tailwind = api.Plugin{
	Name: "Tailwind",
	Setup: func(build api.PluginBuild) {
		cmd := exec.Command("./node_modules/.bin/tailwindcss", "build", "src/main.css", "-o", "dist/styles.css", "-m")

		err := cmd.Run()

		if err != nil {
			log.Fatal(err)
		}
	},
}
