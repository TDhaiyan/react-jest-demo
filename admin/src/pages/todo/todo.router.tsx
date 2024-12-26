import TodoPage from "./index"
import { DesktopOutlined } from '@ant-design/icons'
import { AdminRouterItem } from "../../router"
import Detail from "./detail"

const todoRoutes: AdminRouterItem[] = [
  {
    path: '/todo',
    element: <TodoPage />,
    meta: {
      label: "todo",
      title: "todo",
      key: "/todo",
      icon: <DesktopOutlined />,
    },
    children: [{
      path: '',
      element: <TodoPage />,
      meta: {
        label: "todo",
        title: "todo",
        key: "/todo",
        icon: <DesktopOutlined />,
      }
    },

  ]
  },
  {
    path: '/todo/detail',
    element: <Detail />,
    display: false,
    meta: {
      label: "detail",
      title: "detail",
      key: "/todo",
      icon: <DesktopOutlined />,
    }
  }
]

export default todoRoutes
