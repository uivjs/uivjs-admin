import { defineComponent, ExtractPropTypes, PropType, h } from 'vue';
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
    type: Function as PropType<(e: Event) => void>,
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
    return () => {
      const { onSubmit, onReset, onChange, onBlur, onFocus } = props;
      return (
        <form class="uiv-login-form" {...{ onSubmit, onReset, onChange, onBlur, onFocus }}>
          <h2>{props.title}</h2>
          <div>
            <label>
              <input type="text" name="username" value={props.username} placeholder="请输入账号" />
            </label>
          </div>
          <div>
            <label>
              <input type="password" name="password" value={props.password} placeholder="请输入密码" />
            </label>
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