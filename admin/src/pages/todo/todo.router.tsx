import TodoPage from "./index"
import { DesktopOutlined } from '@ant-design/icons'
import { AdminRouterItem } from "../../router"
import Detail from "./detail"

const todoRoutes: AdminRouterItem[] = [
  {
    path: '/todo',
    element: <TodoPage />,
    display: true,
    meta: {
      label: "todo",
      title: "todo",
      key: "/todo",
      icon: <DesktopOutlined />,
    }
  },
  {
    path: '/detail',
    element: <Detail />,
    display: false,
    meta: {
      label: "detail",
      title: "detail",
      key: "/detail",
      icon: <DesktopOutlined />,
    }
  }
]

export default todoRoutes
