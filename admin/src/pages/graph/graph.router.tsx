import DemoPage from "./index";
import { DesktopOutlined } from '@ant-design/icons'
import { AdminRouterItem } from "../../router";
import DemoChart from "./chart";

const graphRoutes: AdminRouterItem[] = [
  {
    path: 'graph',
    element: <DemoPage />,
    meta: {
      label: "graph",
      title: "graph",
      key: "/graph",
      icon: <DesktopOutlined />,
    },
    children: [{
      path: 'chart',
      element: <DemoChart />,
      meta: {
        label: "chart",
        title: "chart",
        key: "/graph/chart",
        icon: <DesktopOutlined />,
      }
    }]
  },
]

export default graphRoutes
