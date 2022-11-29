import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/components/menu/Menu.module.scss";

/**
 * Menu component
 */
export const Menu: React.FC = () => {
  const MENU_STYLES = clsx(styles.menu);
  const MENU_LIST_STYLES = clsx(styles.menu__list);
  const MENU_ITEM_STYLES = clsx(styles.menu__item);
  const MENU_LINK_STYLES = clsx(styles.menu__link);

  return (
    <nav className={MENU_STYLES}>
      <ul className={MENU_LIST_STYLES}>
        <li className={MENU_ITEM_STYLES}>
          <NavLink className={MENU_LINK_STYLES} to="/about">
            О Центре
          </NavLink>
        </li>
        <li className={MENU_ITEM_STYLES}>
          <NavLink className={MENU_LINK_STYLES} to="/employees">
            Сотрудники
          </NavLink>
        </li>
        <li className={MENU_ITEM_STYLES}>
          <NavLink className={MENU_LINK_STYLES} to="/tests">
            Тесты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
