import React from "react";
import { AppRouter } from "./providers/route-provider";
import "@/app/styles/index.scss";
const App = () => {

  return (
    <div className="app app_light_theme">
      <AppRouter />
    </div>
  );
};
export default App;
