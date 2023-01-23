import React from "react";
import clsx from "clsx";
import styles from "src/app/components/header/Header.module.scss";
import {Menu} from "src/app/components/menu/Menu";
import LogoSrc from "src/resources/logo.png";
import {animateScroll as scroll} from "react-scroll";

/**
 * Header component
 */
export const Header: React.FC = () => {
  const HEADER_STYLES = clsx(styles.header);
  const HEADER_NAVIGATION_STYLES = clsx(styles.header__navigation);
  const HEADER_LOGO_STYLES = clsx(styles.header__logo);
  const HEADER_PHONE_STYLES = clsx(styles.header__phone);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      scroll.scrollToTop();
    }
  };

  return (
    <header className={HEADER_STYLES}>
      <div className={HEADER_NAVIGATION_STYLES}>
        <div
          className={HEADER_LOGO_STYLES}
          onClick={() => {
            return scroll.scrollToTop();
          }}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="button"
        >
          <img src={LogoSrc} alt="Логотип сайта." />
        </div>
        <Menu />
        <address className={HEADER_PHONE_STYLES}>
          <a href="tel:+79818574624">+7 (981) 857-46-24</a>
        </address>
      </div>
    </header>
  );
};
