import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MenuItemType } from "antd/es/menu/interface";
import z from 'zod'


const RouteObjectSchema = z.object({
  path: z.string(),
  element: z.any().optional(),
  children: z.array(z.lazy((): z.ZodTypeAny => RouteObjectSchema)).optional(),
  display: z.boolean().optional().default(true)
});

export type AdminRouterItem = z.infer<typeof RouteObjectSchema> & {
  meta?: MenuItemType,
  children?: AdminRouterItem[]
};



/**
 * auto load route from pages/***\/*.router.ts
 * @returns route
 */
const loadRouteModules = async () => {
  const routeModuleFiles = import.meta.glob('../pages/**/*.router.tsx', {
    eager: true,
    import: 'default'
  })
  const routeModules: AdminRouterItem[] = []

  for await (const [key, module] of Object.entries(routeModuleFiles)) {
    console.log('key = ', key, 'module = ', module)

    if (module) {
      const routes = Array.isArray(module) ? module : [module];
      routeModules.push(...routes.filter(route => route.display !== false));
    }
  }

  return routeModules
}

export const routes: AdminRouterItem[] = [
  ...await loadRouteModules()
]

export default createBrowserRouter([{
  path: "/",
  element: <App />,
  children: routes,
}])
