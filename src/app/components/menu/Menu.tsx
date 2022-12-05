import React from "react";
import {Link} from "react-scroll";
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
          <Link
            className={MENU_LINK_STYLES} to="about"
            activeClass="active"
            smooth
            duration={500}
            offset={-66}
          >
            О Центре
          </Link>
        </li>
        <li className={MENU_ITEM_STYLES}>
          <Link
            className={MENU_LINK_STYLES} to="employees"
            activeClass="active"
            smooth
            duration={500}
            offset={-66}
          >
            Сотрудники
          </Link>
        </li>
        <li className={MENU_ITEM_STYLES}>
          <Link
            className={MENU_LINK_STYLES} to="tests"
            activeClass="active"
            smooth
            duration={500}
            offset={-66}
          >
            Тесты
          </Link>
        </li>
      </ul>
    </nav>
  );
};
