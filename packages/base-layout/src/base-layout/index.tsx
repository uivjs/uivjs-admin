import { ExtractPropTypes, defineComponent, h, ref, PropType } from 'vue';
import { Layout, Header, Content, Footer, Sider } from '@uivjs/vue-layout';
import { RouterLink } from 'vue-router';

const logoURL = "data:image/png;base64,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";
const Logo = ({ ...other }: { src?: string }) => <img {...other} style={{ height: '32px' }} />;

export const baseLayout = {
  title: {
    type: String,
    default: 'Vue Admin',
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
  logoSrc: {
    type: String,
    default: logoURL
  },
  onCollapsed: {
    type: Function as PropType<(e: MouseEvent, collapsed: boolean) => void>,
  }
}

export type BaseLayoutProps = ExtractPropTypes<typeof baseLayout>;
export * from '@uivjs/vue-layout';
export const BaseLayout = defineComponent({
  name: 'base-layout',
  props: baseLayout,
  setup(props, { slots }) {
    const collapsed = ref(props.collapsed);
    const onCollapsed = (e: MouseEvent) => {
      collapsed.value = !collapsed.value;
      if (props.onCollapsed) {
        props.onCollapsed(e, collapsed.value);
      }
    }
    return () => {
      return (
        <Layout class="uiv-base-layout-wrapper">
          <div style={collapsed.value ? { width: '80px', flex: '0 0 80px', transition: 'all 0.2s' } : { width: '200px', flex: '0 0 200px', transition: 'all 0.2s' }}/>
          <Sider collapsed={collapsed.value} class="uiv-base-layout-menu uiv-base-layout-sider-fixed">
            <div class="uiv-base-layout-sider-children">
              <div style={{ overflow: 'hidden auto', flex: '1 1 0%', height: '100%' }}>
                {slots.menus ? slots.menus() : ''} 
              </div>
              <div class="uiv-base-layout-sider-links" onClick={onCollapsed}>
                {collapsed.value ? (
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="menu-fold" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"></path>
                  </svg>
                ) : (
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="menu-unfold" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"></path>
                  </svg>
                )}
              </div>
            </div>
          </Sider>
          <Layout>
            <Header />
            <Header class="uiv-base-layout-fixed-header">
              <RouterLink to="/">
                <Logo src={props.logoSrc} />
                <h1>{props.title}</h1>
              </RouterLink>
              <div>
                {slots.footer ? slots.footer() : ''}
              </div>
            </Header>
            <Content>
              {slots.default ? slots.default() : (
                <router-view />
              )}
            </Content>
            <Footer>
              {slots.footer ? slots.footer() : ''}
            </Footer>
          </Layout>
        </Layout>
      );
    }
  }
});
