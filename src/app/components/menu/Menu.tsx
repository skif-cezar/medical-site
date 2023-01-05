import React, {useState} from "react";
import {Link} from "react-scroll";
import clsx from "clsx";
import styles from "src/app/components/menu/Menu.module.scss";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

/**
 * Menu component
 */
export const Menu: React.FC = () => {
  const MENU_STYLES = clsx(styles.menu);
  const MENU_LIST_STYLES = clsx(styles.menu__list);
  const ACTIVE_MENU_STYLES = clsx(styles.menu__list, styles.menu_active);
  const MENU_ITEM_STYLES = clsx(styles.menu__item);
  const MENU_LINK_STYLES = clsx(styles.menu__link);
  const ACTIVE_LINK_STYLES = clsx(styles.menu__item, styles.active);
  const MOBILE_BUTTON_STYLES = clsx(styles.mobile_btn);

  const [nav, setNav] = useState(false);

  return (
    <nav className={MENU_STYLES}>
      <ul
        className={nav ? ACTIVE_MENU_STYLES : MENU_LIST_STYLES}>
        <li className={MENU_ITEM_STYLES}>
          <Link
            className={MENU_LINK_STYLES}
            to="about"
            activeClass={ACTIVE_LINK_STYLES}
            smooth
            duration={500}
            offset={-66}
            spy
          >
            О Центре
          </Link>
        </li>
        <li className={MENU_ITEM_STYLES}>
          <Link
            className={MENU_LINK_STYLES}
            to="employees"
            activeClass={ACTIVE_LINK_STYLES}
            smooth
            duration={500}
            offset={-66}
            spy
          >
            Сотрудники
          </Link>
        </li>
        <li className={MENU_ITEM_STYLES}>
          <Link
            className={MENU_LINK_STYLES}
            to="tests"
            activeClass={ACTIVE_LINK_STYLES}
            smooth
            duration={500}
            offset={-66}
            spy
          >
            Тесты
          </Link>
        </li>
      </ul>
      <button
        onClick={() => {
          return setNav(!nav);
        }}
        className={MOBILE_BUTTON_STYLES}
        type="button"
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </button>
    </nav>
  );
};
