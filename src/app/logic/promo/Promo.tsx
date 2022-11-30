import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/promo/Promo.module.scss";
import {Button} from "src/app/components/button/Button";

/**
 * Promo section
 */
export const Promo: React.FC = () => {
  const PROMO_STYLES = clsx(styles.promo);
  const TITLE_HIDDEN_STYLES = clsx(styles.hidden);
  const CONTAINER_STYLES = clsx(styles.promo__container);
  const TITLE_STYLES = clsx(styles.promo__title);
  const DESCRIPTION_STYLES = clsx(styles.promo__description);

  const handleclick = (): void => {
    // eslint-disable-next-line no-alert
    alert(123);
  };

  return (
    <section className={PROMO_STYLES}>
      <h1 className={TITLE_HIDDEN_STYLES}>Медицинское учреждение</h1>
      <div className={CONTAINER_STYLES}>
        <h2 className={TITLE_STYLES}>Пройдите тест и&nbsp;мы&nbsp;поможем подобрать план лечения</h2>
        <p className={DESCRIPTION_STYLES}>
          Медицинский центр общего профиля. Помогаем пациентам по всем направлениям. Наши
          специалисты — врачи с 20-тилетним стажем.
        </p>
        <Button text="Оставить заявку" onClick={handleclick} />
      </div>
    </section>
  );
};
