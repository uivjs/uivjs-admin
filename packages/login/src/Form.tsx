import { defineComponent, ExtractPropTypes, PropType, h, reactive, ref } from 'vue';
import Validator, { Values } from 'validator.tool';

export const form = {
  title: {
    type: String,
    default: '登录'
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  onSubmit: {
    type: Function as PropType<(e: Event, data: Values) => void>,
    default: (e: Event) => e.preventDefault()
  },
  onReset: {
    type: Function as PropType<(e: Event) => void>,
    default: (e: Event) => e.preventDefault()
  },
  onChange: {
    type: Function as PropType<(e: Event) => void>,
    default: (e: Event) => e.preventDefault()
  },
  onInput: {
    type: Function as PropType<(e: Event) => void>,
    default: (e: Event) => e.preventDefault()
  },
  onBlur: {
    type: Function as PropType<(e: FocusEvent) => void>,
    default: (e: FocusEvent) => e.preventDefault()
  },
  onFocus: {
    type: Function as PropType<(e: FocusEvent) => void>,
    default: (e: FocusEvent) => e.preventDefault()
  },
};

type ExtractPublicPropTypes<T> = Omit<Partial<ExtractPropTypes<T>>, Extract<keyof T, `internal${string}`>>;
export type LoginFormProps = ExtractPublicPropTypes<typeof form>;

export default defineComponent({
  props: form,
  setup(props) {
    const errmsg = reactive({ username: '', password: '' });
    const validator = new Validator({
      initValues: { username: props.username, password: props.password },
      rules: {
        username: {
          validate: (val) => (!val || typeof val === 'string' && (val.length > 15 || val.length < 5)) ? '用户名长度在 6 ～15 位！' : ''
        },
        password: {
          validate: (val = '') => typeof val === 'string' && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(val) ? '必须包含大小写字母和数字的组合，长度在 8-10 之间！' : ''
        }
      }
    });
    return () => {
      const { onSubmit, onReset, onChange, onInput, onBlur, onFocus } = props;
      const handleSubmit = (e: Event) => {
        e.preventDefault();
        const valid = validator.allValid()
        validator.showMessages()
        const values = validator.getValues();
        for(let key in validator.fields) {
          // @ts-ignore
          errmsg[key] = validator.errorMessages[key];
        }
        if (valid) {
          onSubmit && onSubmit(e, values);
        }
      }
      const handleInput = (env: Event | InputEvent) => {
        const target = env.target as HTMLInputElement;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        validator.message(name, value);
        const valid = validator.allValid();
        onInput && onInput(env);
      }
      return (
        <form class="uiv-login-form" onInput={(evn) => handleInput(evn)} {...{ onSubmit: handleSubmit, onReset, onChange, onBlur, onFocus }}>
          <h2>{props.title}</h2>
          <div class="uiv-login-field">
            <label>
              <input class={errmsg.username ? 'error' : ''} type="text" name="username" value={validator.values.username} placeholder="请输入账号" />
            </label>
            <div>
              {errmsg.username}
            </div>
          </div>
          <div class="uiv-login-field">
            <label>
              <input class={errmsg.password ? 'error' : ''} type="password" name="password" value={validator.values.password} placeholder="请输入密码" />
            </label>
            <div>
              {errmsg.password}
            </div>
          </div>
          <div class="uiv-login-button">
            <button type="submit">登录</button>
            {!!props.onReset && (
              <button type="reset">重置</button>
            )}
          </div>
        </form>
      )
    }
  },
})