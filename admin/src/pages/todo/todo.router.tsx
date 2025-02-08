import TodoPage from "./index"
import { DesktopOutlined } from '@ant-design/icons'
import { AdminRouterItem } from "../../router"
import Detail from "./detail"
import DetailV2 from "./detailV2"
import FormAnd from "./form-and"

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
  },
  {
    path: '/detail-v2',
    element: <DetailV2 />,
    display: false,
    meta: {
      label: "detail-v2",
      title: "detail-v2",
      key: "/detail-v2",
      icon: <DesktopOutlined />,
    }
  },
  {
    path: '/form',
    element: <FormAnd/>,
    display: false,
    meta: {
      label: "form",
      title: "form",
      key: "/form",
      icon: <DesktopOutlined />,
    }
  }

]

export default todoRoutes
