import TodoPage from "./index";
import { DesktopOutlined } from '@ant-design/icons'
import { AdminRouterItem } from "../../router";

const todoRoutes: AdminRouterItem[] = [
  {
    path: 'todo',
    element: <TodoPage />,
    meta: {
      label: "todo",
      title: "todo",
      key: "/todo",
      icon: <DesktopOutlined />,
    },
    children: [{
      path: 'detail',
      element: <TodoPage />,
      meta: {
        label: "detail",
        title: "detail",
        key: "/todo/detail",
        icon: <DesktopOutlined />,
      }
    }]
  },
]

export default todoRoutes
