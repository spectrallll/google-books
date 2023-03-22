import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
  // Можно расширить добавив роли/приватные роуты
  // authOnly?: boolean
  // roles?: UserRole[]
}
