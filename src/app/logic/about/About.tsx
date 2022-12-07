import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/about/About.module.scss";
import stethoscopeSrc from "src/resources/stethoscope.jpg";

/**
 * About section
 */
export const About: React.FC = () => {
  const ABOUT_STYLES = clsx(styles.about);
  const TITLE_STYLES = clsx(styles.about__title);
  const CONTAINER_STYLES = clsx(styles.about__container);
  const CONTENT_STYLES = clsx(styles.about__content);

  return (
    <section className={ABOUT_STYLES} id="about">
      <h2 className={TITLE_STYLES}>О центре</h2>
      <article className={CONTAINER_STYLES}>
        <div className={CONTENT_STYLES}>
          <div>
            <img
              src={stethoscopeSrc}
              alt="Стетоскоп — медицинский диагностический прибор для выслушивания звуков, исходящих от органов."
              width="445"
              height="465"
            />
          </div>
          <div>
            <p>
              Наша команда докторов, подобранная с особой тщательностью, — это профессионалы высокой
              квалификации с уникальным для нашей страны опытом, авторитетом в своей области,
              научными степенями. Наш персонал — медицинские работники с&nbsp;большим стажем, дружелюбные
              и внимательные к&nbsp;каждому пациенту.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
