import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/layout/Layout.module.scss";
import {Header} from "src/app/components/header/Header";

/**
 * Layout component
 */
export const Layout: React.FC = () => {
  const WRAPPER_STYLES = clsx(styles.wrapper);
  const MAIN_STYLES = clsx(styles.main);

  return (
    <div className={WRAPPER_STYLES}>
      <Header />
      <main className={MAIN_STYLES}>
        main
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
};
