import React from "react";
import clsx from "clsx";
import styles from "src/app/components/header/Header.module.scss";
import {Menu} from "src/app/components/menu/Menu";

/**
 * Header component
 */
export const Header: React.FC = () => {
  const HEADER_STYLES = clsx(styles.header);
  const HEADER_NAVIGATION_STYLES = clsx(styles.header__navigation);
  const HEADER_LOGO_STYLES = clsx(styles.header__logo);
  const HEADER_PHONE_STYLES = clsx(styles.header__phone);

  return (
    <header className={HEADER_STYLES}>
      <div className={HEADER_NAVIGATION_STYLES}>
        <div className={HEADER_LOGO_STYLES}>
          LOGO
        </div>
        <Menu />
        <address className={HEADER_PHONE_STYLES}>
          <a href="tel:+79818574624">+7 (981) 857-46-24</a>
        </address>
      </div>
    </header>
  );
};