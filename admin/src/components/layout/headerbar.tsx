
import { Layout, Switch } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import useConfigStore from '../../stores';
import z from 'zod'
const { Header } = Layout;


const headerbarSchema= z.object({
  colorBgContainer: z.string(),
});

type HeaderbarSchema = z.infer<typeof headerbarSchema>;

const Headerbar = (props: HeaderbarSchema) => {
  const setTheme = useConfigStore(state => state.setTheme)

  return (
    <Header title='admin' style={{ padding: 0, background: props.colorBgContainer }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', padding: "0 20px", justifyContent: 'space-between' }}>
        <h2>Admin</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Switch checkedChildren="Light" unCheckedChildren="Dark" defaultChecked onChange={(checked) => setTheme(checked ? 'default' : 'dark')} />
          <p style={{ marginRight: 10 }}>admin</p>
          <GithubOutlined style={{ fontSize: 30 }} onClick={() => window.open('https://github.com/TDhaiyan/react-jest-demo/tree/main/admin')} />
        </div>
      </div>
    </Header>
  )
}

export default Headerbar
