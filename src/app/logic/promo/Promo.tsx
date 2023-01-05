import React from "react";
import {Link} from "react-scroll";
import clsx from "clsx";
import styles from "src/app/logic/promo/Promo.module.scss";
import stylesBtn from "src/app/components/button/Button.module.scss";

/**
 * Promo section
 */
export const Promo: React.FC = () => {
  const PROMO_STYLES = clsx(styles.promo);
  const TITLE_HIDDEN_STYLES = clsx(styles.hidden);
  const CONTAINER_STYLES = clsx(styles.promo__container);
  const TITLE_STYLES = clsx(styles.promo__title);
  const DESCRIPTION_STYLES = clsx(styles.promo__description);
  const LINK_STYLES = clsx(stylesBtn.button);

  return (
    <section className={PROMO_STYLES}>
      <h1 className={TITLE_HIDDEN_STYLES}>Медицинское учреждение</h1>
      <div className={CONTAINER_STYLES}>
        <h2 className={TITLE_STYLES}>
          Помощь семье аутичного&nbsp;ребёнка
        </h2>
        <p className={DESCRIPTION_STYLES}>
          Медицинский центр общего профиля. Помогаем пациентам по всем направлениям. Наши
          специалисты — врачи с 20-тилетним стажем.
        </p>
        <Link
          className={LINK_STYLES}
          to="contacts"
          smooth duration={700}
          offset={-66} spy
        >
          Оставить заявку
        </Link>
      </div>
    </section>
  );
};
