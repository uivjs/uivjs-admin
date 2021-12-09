@uivjs/admin-login
===

登录界面

## 安装

```bash
npm i @uivjs/admin-login
```

## 使用

```vue
<template>
  <login title="请登录" @submit="submit" @reset="reset" />
</template>

<script>
import Login from '@uivjs/admin-login';

export default {
  components: {
    Login,
  },
  methods: {
    submit(e) {
      e.preventDefault()
      const data = new FormData(e.target);
      const value = Object.fromEntries(data.entries());
      console.group('submit')
      console.log(':==>', data)
      console.log(':==>', value)
      console.log(':==>', data.get('username'))
      console.log(':==>', data.get('password'))
      console.groupEnd()
    },
    reset(e) {
      console.dir(e.target)
      e.target.reset();
      const data = new FormData(e.target);
      const value = Object.fromEntries(data.entries());
      console.group('reset')
      console.log(':==>', data.get('username'))
      console.log(':==>', data.get('password'))
      console.log('>>>', value)
      console.dir(data)
      console.groupEnd()
    }
  },
}
</script>
```

## 自定义登录页面

如果你在组件 `login` 添加 `children` 内容，将替换默认表单内容。

```vue
<template>
  <login>
    <form class="uiv-login-form" @submit="submit" @reset="reset">
      <h2>请登录</h2>
      <div>
        <label>
          <input type="text" name="username" :value="username" placeholder="请输入账号" />
        </label>
      </div>
      <div>
        <label>
          <input type="password" name="password" :value="password" placeholder="请输入密码" />
        </label>
      </div>
      <div class="uiv-login-button">
        <button type="submit">登录</button>
        <button type="reset">重置</button>
      </div>
    </form>
  </login>
</template>

<script>
import Login from '@uivjs/admin-login';

export default {
  components: {
    Login,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submit(e) {
      e.preventDefault()
      const data = new FormData(e.target);
      const value = Object.fromEntries(data.entries());
      console.group('submit')
      console.log(':==>', data)
      console.log(':==>', value)
      console.log(':==>', data.get('username'))
      console.log(':==>', data.get('password'))
      console.groupEnd()
    },
    reset(e) {
      console.dir(e.target)
      e.target.reset();
      const data = new FormData(e.target);
      const value = Object.fromEntries(data.entries());
      console.group('reset')
      console.log(':==>', data.get('username'))
      console.log(':==>', data.get('password'))
      console.log('>>>', value)
      console.dir(data)
      console.groupEnd()
    }
  },
}
</script>
```