import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config";
import { Suspense } from "react";


export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          {Object.values(routeConfig).map(route => {
            return <Route key={route.path} path={route.path} element={route.element} />
          })}
      </Routes>
    </Suspense>
  )
}
