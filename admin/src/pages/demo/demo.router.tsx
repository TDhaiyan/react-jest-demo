import DemoPage from "./index";
import { DesktopOutlined } from '@ant-design/icons'
import { AdminRouterItem } from "../../router";
import DemoChart from "./chart";

const demoRoutes: AdminRouterItem[] = [
  {
    path: 'demo',
    element: <DemoPage />,
    meta: {
      label: "Demo",
      title: "Demo",
      key: "/demo",
      icon: <DesktopOutlined />,
    },
    children: [{
      path: 'chart',
      element: <DemoChart />,
      meta: {
        label: "chart",
        title: "chart",
        key: "/demo/chart",
        icon: <DesktopOutlined />,
      }
    }]
  },
]

export default demoRoutes
