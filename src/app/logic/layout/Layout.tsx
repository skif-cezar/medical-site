import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/layout/Layout.module.scss";
import {Header} from "src/app/components/header/Header";
import {Promo} from "src/app/logic/promo/Promo";
import {About} from "src/app/logic/about/About";
import {Team} from "src/app/logic/team/Team";
import {Footer} from "src/app/logic/footer/Footer";
import {Tests} from "src/app/logic/tests/Tests";
import {Contacts} from "src/app/logic/contacts/Contacts";

/**
 *  Path to main page
 */
export const MAIN_PAGE_PATH = "/";

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
        <Promo />
        <About />
        <Team />
        <Tests />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};
