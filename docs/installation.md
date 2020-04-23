# Installation

## Direct Download / CDN

https://unpkg.com/vue-junkie-props/dist/vue-junkie-props 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-junkie-props@{{ $version }}/dist/vue-junkie-props.js
 
Include vue-junkie-props after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-junkie-props/dist/vue-junkie-props.js"></script>
```

## NPM

```sh
$ npm install vue-junkie-props
```

## Yarn

```sh
$ yarn add vue-junkie-props
```

When used with a module system, you must explicitly install the `vue-junkie-props` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-junkie-props from 'vue-junkie-props'

Vue.use(vue-junkie-props)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-junkie-props` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-junkie-props.git node_modules/vue-junkie-props
$ cd node_modules/vue-junkie-props
$ npm install
$ npm run build
```

