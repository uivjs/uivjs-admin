Vue Admin
===

Vue 3.0 admin management system template.

## Open in CodeSandbox

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/s/github/uivjs/uivjs-admin/tree/master/example/) [![gitee uivjs-admin](https://jaywcjlove.github.io/sb/ico/gitee.svg)](https://uivjs.gitee.io/uivjs-admin/)

## 🌏  Open in the Cloud 

Click any of the buttons below to start a new development environment to demo or contribute to the codebase without having to install anything on your machine:

[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode)](https://vscode.dev/github/uivjs/uivjs-admin)
[![Open in Glitch](https://img.shields.io/badge/Open%20in-Glitch-blue?logo=glitch)](https://glitch.com/edit/#!/import/github/uivjs/uivjs-admin)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/uivjs/uivjs-admin)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/uivjs/uivjs-admin)
[![Open in Repl.it](https://replit.com/badge/github/withastro/astro)](https://replit.com/github/uivjs/uivjs-admin)
[![Open in Codeanywhere](https://codeanywhere.com/img/open-in-codeanywhere-btn.svg)](https://app.codeanywhere.com/#https://github.com/uivjs/uivjs-admin)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/uivjs/uivjs-admin)

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