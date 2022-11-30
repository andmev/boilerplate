const { build } = require('esbuild');


const skipReactImports = {
    name: 'skipReactImports',
    setup(build) {
        build.onResolve({ filter: /^react(-dom)?$/ }, (args) => ({
            path: require.resolve(args.path),
            namespace: `globalExternal_${args.path}`,
        }));

        build.onLoad({ filter: /.*/, namespace: 'globalExternal_react' },
            () => ({
                contents: `module.exports = globalThis.React`,
                loader: 'js',
            })
        );

        build.onLoad({ filter: /.*/, namespace: 'globalExternal_react-dom' },
            () => ({
                contents: `module.exports = globalThis.ReactDOM`,
                loader: 'js',
            })
        );
    },
};

(() => {
  const finish = ({ errors, warnings }) => console.log(`Build finished.\nErrors: ${errors.length}, Warnings: ${warnings.length}`);
  const onRebuild = (error) => (error ? console.error(error) : finish({ errors: [], warnings: [] }));

  build({
    watch: process.argv.includes('-w') && { onRebuild },
    format: 'esm',
    bundle: true,
    minify: true,
    sourcemap: false,
    splitting: true,
    outdir: 'dist',
    charset: 'utf8',
    entryPoints: ['src/App.tsx'],
    external: ['react', 'react-dom'],
    plugins: [skipReactImports],
  }).then(finish).catch(() => process.exit(1));
})();
