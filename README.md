Vue Admin
===

Vue 3.0 admin management system template.

## Open in CodeSandbox

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/s/github/uivjs/uivjs-admin/tree/master/example/) [![gitee uivjs-admin](https://jaywcjlove.github.io/sb/ico/gitee.svg)](https://uivjs.gitee.io/uivjs-admin/)

Download the example directly to the local preview: [`uiv-admin.zip`](https://uivjs.github.io/uivjs-admin/zip/example.zip) for Github.

## Description

```bash
.
├── README.md
├── example          # Example preview
│   ├── README.md
│   ├── package.json
│   ├── public
│   ├── src
│   └── vue.config.js
├── lerna.json
├── package.json
├── packages
│   ├── base-layout  # Source code of package @uivjs/admin-base-layout
│   └── login        # Source code of package @uivjs/admin-login
└── tsconfig.json
```

## Development

1. Install dependencies in the root directory `.`

```bash
npm install
```

2. Installation package dependencies

```bash
npm run bootstrap
```

3. Compile package

```bash
npm run build
```

4. Monitor the compiled package

```bash
npm run watch:login       # 📦 @uivjs/admin-login
npm run watch:base-layout # 📦 @uivjs/admin-base-layout
```

5. Run [example](./example/README.md)

```bash
# 或者根目录运行
npm run start
```

## Packages

This git repository is a repo built using Lerna. It contains several packages:


Package | Version | Description
---- | ---- | ----
[`@uivjs/admin-login`](https://www.npmjs.com/package/@uivjs/admin-login) | [![npm](https://img.shields.io/npm/v/@uivjs/admin-login.svg?maxAge=3600)](https://www.npmjs.com/package/@uivjs/admin-login) | - 
[`@uivjs/admin-base-layout`](https://www.npmjs.com/package/@uivjs/admin-base-layout) | [![npm](https://img.shields.io/npm/v/@uivjs/admin-base-layout.svg?maxAge=3600)](https://www.npmjs.com/package/@uivjs/admin-base-layout) | - 

## License

Licensed under the MIT License.