


```bash
.
├── README.md
├── example    # 实例预览
├── lerna.json
├── package.json
├── packages    # 放置 包的地方
├── tsconfig.json
└── yarn.lock
```


1. 在根 `.` 安装依赖

```bash
yarn install
```

2. 安装包依赖

```bash
npm run bootstrap
npm run hoist

yarn run bootstrap
yarn run hoist
```

3. 编译包

```bash
npm run build
```

4. 运行实例

```bash
cd example & npm run serve

# 或者根目录运行
npm run start
```
