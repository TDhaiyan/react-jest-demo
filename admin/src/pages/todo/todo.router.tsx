import TodoPage from "./index";
import { DesktopOutlined } from '@ant-design/icons'
import { AdminRouterItem } from "../../router";
import Detail from "./detail";

const todoRoutes: AdminRouterItem[] = [
  {
    path: 'graph',
    element: <TodoPage />,
    meta: {
      label: "graph",
      title: "graph",
      key: "/graph",
      icon: <DesktopOutlined />,
    },
    children: [{
      path: 'chart',
      element: <Detail />,
      meta: {
        label: "chart",
        title: "chart",
        key: "/graph/chart",
        icon: <DesktopOutlined />,
      }
    }]
  },
]

export default todoRoutes
