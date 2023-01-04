const fs = require('fs');
const path = require('path');
const sharp = require("sharp");
const { build } = require('esbuild');
const purgeCSSPlugin = require('esbuild-plugin-purgecss');
const cssModulesPlugin = require('esbuild-css-modules-plugin');


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

const sharpImagesPlugin = {
    name: 'sharpImagesPlugin',
    setup(build) {
      build.onStart(async () => {
        const images = path.join(__dirname, 'images');
        const dir = await fs.promises.readdir(images);

        const dist = path.join(__dirname, 'dist', 'images');

        await fs.promises.mkdir(dist, { recursive: true });

        const sizes = [{ width: 1920, name: 'large' }, { width: 1280, name: 'medium' }, { width: 640, name: 'small' }];

        for (const file of dir) {
          const fileExtension = path.extname(file);
          const fileName = path.basename(file, fileExtension);

          for (const size of sizes) {
            await sharp(`${images}/${file}`)
              .clone()
              .resize({ width: size.width, withoutEnlargement: true })
              .toFormat('webp', { quality: 80 })
              .toFile(path.join(dist, `${fileName}-${size.name}${fileExtension}`));
          }
        }
      })
    }
};

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
    write: true,
    logLevel: 'debug',
    target: ['es2021'],
    outdir: 'dist',
    charset: 'utf8',
    entryPoints: ['src/bootstrap.css', 'src/index.tsx'],
    external: ['react', 'react-dom'],
    plugins: [
        skipReactImports,
        sharpImagesPlugin,
        purgeCSSPlugin(),
        cssModulesPlugin({
            inject: true,
            localsConvention: 'dashesOnly',
            filter: /\.modules?\.css$/i
        }),
        copyPlugin('index.html', 'dist/index.html'),
        copyPlugin('favicon.ico', 'dist/favicon.ico'),
        copyPlugin('locales', 'dist/locales'),
    ],
  }).then(finish).catch(error);
})();
