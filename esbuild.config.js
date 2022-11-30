const fs = require('fs');
const path = require('path');
const { build } = require('esbuild');
const purgeCSSPlugin = require('esbuild-plugin-purgecss');


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

const copyPlugin = (from, to) => {
    return {
        name: 'copyPlugin',
        setup(build) {
            build.onEnd(() => fs.cpSync(from, path.join(path.dirname(build.initialOptions.outdir), to), {
                recursive: true,
                force: true,
                dereference: true
            }));
        },
    }
}

(() => {
  const finish = ({ errors, warnings }) => console.log(`Build finished.\nErrors: ${errors.length}, Warnings: ${warnings.length}`);
  const error = (error) => { console.error(error); process.exit(1); };
  const onRebuild = (error) => (error ? console.error(error) : finish({ errors: [], warnings: [] }));

  build({
    watch: process.argv.includes('-w') && { onRebuild },
    format: 'esm',
    bundle: true,
    minify: true,
    sourcemap: false,
    splitting: true,
    metafile: true,
    outdir: 'dist',
    charset: 'utf8',
    entryPoints: ['styles/bootstrap.css', 'src/index.tsx'],
    external: ['react', 'react-dom'],
    plugins: [
        skipReactImports,
        purgeCSSPlugin(),
        copyPlugin('index.html', 'dist/index.html')
    ],
  }).then(finish).catch(error);
})();
