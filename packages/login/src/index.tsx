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
  },
  logoURL: {
    type: String,
  },
  ...form
};

type ExtractPublicPropTypes<T> = Omit<Partial<ExtractPropTypes<T>>, Extract<keyof T, `internal${string}`>>;
export type MarkdownPreviewProps = ExtractPublicPropTypes<typeof login>;

export default defineComponent({
  name: 'uiv-login',
  props: login,
  setup(props) {
    return () => {
      const { title, password, username, onSubmit, onReset, bgURL, logoURL } = props;
      return (
        <div class="uiv-login-wrapper" style={{}}>
          <div style={{ backgroundImage: `url(${bgURL || bg})`}} />
          <div>
            <div class="uiv-login-logo">
              <img src={logoURL || logo} />
            </div>
            <Form {...{ title, password, username, onSubmit, onReset }}/>
          </div>
        </div>
      )
    }
  },
})