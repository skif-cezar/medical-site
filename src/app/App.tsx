import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Header} from "src/app/components/header/Header";

/**
 * The main component in app
 */
export const App: React.FC = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};
