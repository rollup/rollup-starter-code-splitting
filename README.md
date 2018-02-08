# rollup-starter-code-splitting

This repo contains a bare-bones example of how to create an application using Rollup, with code-splitting and dynamic imports.


## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/rollup/rollup-starter-code-splitting
cd rollup-starter-code-splitting
npm install
```

Run `npm run build` to create two versions of the app, as defined in rollup.config.js:

* `public/module` contains native JavaScript modules, for browsers that support them
* `public/nomodule` contains [SystemJS](https://github.com/systemjs/systemjs) modules, for legacy browsers

The `public/index.html` file contains two sets of `<script>` tags, one for each version.

Notice that the seven modules in our `src` folder have been optimised into four modules — two for the 'entry points', and two more for code that is shared by multiple entry points or is loaded dynamically. Rollup will automatically create chunks in such a way that no code is duplicated between them.

Because it outputs native JavaScript modules, there is zero bundler overhead when targeting modern browsers.


## Building and serving

`npm run build` builds the application, along with sourcemap files for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:5000](http://localhost:5000).

## License

[MIT](LICENSE).
