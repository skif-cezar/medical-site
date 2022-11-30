import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/promo/Promo.module.scss";

/**
 * Promo section
 */
export const Promo: React.FC = () => {
  const PROMO_STYLES = clsx(styles.promo);
  const TITLE_HIDDEN_STYLES = clsx(styles.hidden);
  const CONTAINER_STYLES = clsx(styles.container);
  const TITLE_STYLES = clsx(styles.title);
  const DESCRIPTION_STYLES = clsx(styles.description);

  return (
    <section className={PROMO_STYLES}>
      <h1 className={TITLE_HIDDEN_STYLES}>Медицинское учреждение</h1>
      <div className={CONTAINER_STYLES}>
        <h2 className={TITLE_STYLES}>Пройдите тест и&nbsp;мы&nbsp;поможем подобрать план лечения</h2>
        <p className={DESCRIPTION_STYLES}>
          Медицинский центр общего профиля. Помогаем пациентам по всем направлениям. Наши
          специалисты — врачи с 20-тилетним стажем.
        </p>
      </div>
    </section>
  );
};
