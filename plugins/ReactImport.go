package plugins

import "github.com/evanw/esbuild/pkg/api"

var ReactImport = api.Plugin{
	Name: "ReactImport",
	Setup: func(build api.PluginBuild) {
		// Intercept import paths called "env" so esbuild doesn't attempt
		// to map them to a file system location. Tag them with the "env-ns"
		// namespace to reserve them for this plugin.
		build.OnResolve(api.OnResolveOptions{Filter: `^react(-dom)?$`},
			func(args api.OnResolveArgs) (api.OnResolveResult, error) {
				return api.OnResolveResult{
					Path:      args.Path,
					Namespace: "globalExternal_" + args.Path,
				}, nil
			})

		// Load paths tagged with the "env-ns" namespace and behave as if
		// they point to a JSON file containing the environment variables.
		build.OnLoad(api.OnLoadOptions{Filter: `.*`, Namespace: "globalExternal_react"},
			func(args api.OnLoadArgs) (api.OnLoadResult, error) {
				contents := `module.exports = globalThis.React`
				return api.OnLoadResult{
					Contents: &contents,
					Loader:   api.LoaderJS,
				}, nil
			})

		build.OnLoad(api.OnLoadOptions{Filter: `.*`, Namespace: "globalExternal_react-dom"},
			func(args api.OnLoadArgs) (api.OnLoadResult, error) {
				contents := `module.exports = globalThis.ReactDOM`
				return api.OnLoadResult{
					Contents: &contents,
					Loader:   api.LoaderJS,
				}, nil
			})
	},
}
