import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Layout} from "src/app/logic/layout/Layout";

/**
 * The main component in app
 */
export const App: React.FC = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};
