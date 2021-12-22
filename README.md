uiv admin
===

Vue 3.0 admin management system template.

## 目录说明

```bash
.
├── README.md
├── example     # 实例预览
│   ├── README.md
│   ├── package.json
│   ├── public
│   ├── src
│   └── vue.config.js
├── lerna.json
├── package.json
├── packages
│   ├── base-layout  # 包 @uivjs/admin-base-layout 的源码
│   └── login        # 包 @uivjs/admin-login 的源码
└── tsconfig.json
```

## 开发

1. 在根 `.` 安装依赖

```bash
npm install
```

2. 安装包依赖

```bash
npm run bootstrap
```

3. 编译包

```bash
npm run build
```

4. 监听编译包

```bash
npm run watch:login       # 📦 @uivjs/admin-login
npm run watch:base-layout # 📦 @uivjs/admin-base-layout
```

5. 运行实例

```bash
# 或者根目录运行
npm run start
```

## License

Licensed under the MIT License.