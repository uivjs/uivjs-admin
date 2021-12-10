import { defineComponent, ExtractPropTypes, h } from 'vue';
import Form, { form } from './Form';
import './dist.css';
// @ts-ignore
import bg from './bg.jpg';
// @ts-ignore
import logo from './logo.png';

const login = {
  bgURL: {
    type: String,
    default: bg
  },
  logoURL: {
    type: String,
    default: logo
  },
  ...form
};

type ExtractPublicPropTypes<T> = Omit<Partial<ExtractPropTypes<T>>, Extract<keyof T, `internal${string}`>>;
export type LoginProps = ExtractPublicPropTypes<typeof login>;

export default defineComponent({
  name: 'uiv-login',
  props: login,
  setup(props, { slots }) {
    return () => {
      const { title, password, username, onSubmit, onReset, bgURL, logoURL } = props;
      return (
        <div class="uiv-login-wrapper" style={{}}>
          <div style={{ backgroundImage: `url(${bgURL})`}} />
          <div>
            <div class="uiv-login-logo">
              <img src={logoURL} />
            </div>
            {slots.default ? slots.default() : (
              <Form {...{ title, password, username, onSubmit, onReset }}/>
            )}
          </div>
        </div>
      )
    }
  },
})