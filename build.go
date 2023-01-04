package main

import (
	"boilerplate/plugins"
	"fmt"
	"github.com/evanw/esbuild/pkg/api"
	"os"
)

func onFinish(result api.BuildResult) {
	text := api.AnalyzeMetafile(result.Metafile, api.AnalyzeMetafileOptions{
		Color:   true,
		Verbose: false,
	})
	fmt.Printf("%s", text)
	fmt.Printf("\nErrors: %d, Warnings: %d\n", len(result.Errors), len(result.Warnings))
}

func onError(result api.BuildResult) {
	fmt.Println(result.Errors)
	os.Exit(1)
}

func onRebuild(result api.BuildResult) {
	if len(result.Errors) > 0 {
		fmt.Printf("watch build failed: %d errors\n", len(result.Errors))
	} else {
		fmt.Printf("watch build succeeded: %d warnings\n", len(result.Warnings))
	}
}

func main() {
	result := api.Build(api.BuildOptions{
		Bundle:            true,
		MinifySyntax:      true,
		MinifyWhitespace:  true,
		MinifyIdentifiers: true,
		Splitting:         true,
		Metafile:          true,
		Write:             true,
		Outdir:            "dist",
		LogLevel:          api.LogLevelInfo,
		Sourcemap:         api.SourceMapNone,
		Target:            api.ESNext,
		Format:            api.FormatESModule,
		Charset:           api.CharsetUTF8,
		Watch:             &api.WatchMode{OnRebuild: onRebuild},
		EntryPoints:       []string{"src/bootstrap.css", "src/index.tsx"},
		External:          []string{"react", "react-dom"},
		Plugins: []api.Plugin{
			plugins.ReactImport,
			plugins.CopyContent("locales", "dist/locales"),
			plugins.CopyContent("index.html", "dist/index.html"),
			plugins.CopyContent("favicon.ico", "dist/favicon.ico"),
			plugins.CopyContent("images", "dist/images"), // @TODO Update this to use the Sharping Image plugin
		},
	})

	if len(result.Errors) > 0 {
		onError(result)
	} else {
		onFinish(result)
	}

	// Returning from main() exits immediately in Go.
	// Block forever, so we keep watching and don't exit.
	//<-make(chan bool)
}
