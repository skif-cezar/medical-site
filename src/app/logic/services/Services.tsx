import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/services/Services.module.scss";
import BakSrc from "src/resources/BAK-480.jpg";
import TmsSrc from "src/resources/TMS-480.jpg";
import TkmpSrc from "src/resources/TKMP-480.jpg";

/**
 * Services section
 */
export const Services: React.FC = () => {
  const SERVICES_STYLES = clsx(styles.services);
  const TITLE_STYLES = clsx(styles.services__title);
  const CONTAINER_STYLES = clsx(styles.services__container);
  const CONTENT_STYLES = clsx(styles.services__content);
  const IMGS_CONTAINER_STYLES = clsx(styles.services__imgs);
  const CONTAINER_DESCRIPTION_STYLES = clsx(styles.container__description, styles.hidden);
  const CONTAINER_TITLE_STYLES = clsx(styles.container__title);
  const CONTAINER_PARAGRAPH_STYLES = clsx(styles.container__paragraph);

  return (
    <section className={SERVICES_STYLES} id="services">
      <h2 className={TITLE_STYLES}>Наши услуги</h2>
      <article className={CONTAINER_STYLES}>
        <div className={CONTENT_STYLES}>
          <div className={IMGS_CONTAINER_STYLES}>
            <img src={BakSrc} alt="Метод биоакустической коррекции (БАК)." />
            <div className={CONTAINER_DESCRIPTION_STYLES}>
              <h3 className={CONTAINER_TITLE_STYLES}>Метод биоакустической коррекции (БАК).</h3>
              <p className={CONTAINER_PARAGRAPH_STYLES}>
                Метод биоакустической коррекции (БАК) - это сенсорная стимуляция регуляторных
                структур головного мозга звуками, сформированными на&nbsp;основе
                электроэнцефалограммы в&nbsp;реальном времени, для активации механизмов
                саморегуляции.
              </p>
            </div>
          </div>
          <div className={IMGS_CONTAINER_STYLES}>
            <img src={TmsSrc} alt="Транскраниальная магнитная стимуляция (ТМС)." />
            <div className={CONTAINER_DESCRIPTION_STYLES}>
              <h3 className={CONTAINER_TITLE_STYLES}>
                Транскраниальная магнитная стимуляция (ТМС).
              </h3>
              <p className={CONTAINER_PARAGRAPH_STYLES}>
                Транскраниальная магнитная стимуляция (ТМС) – современная неинвазивная методика,
                позволяющая стимулировать нервные клетки в&nbsp;пострадавших участках мозга, что приводит
                к&nbsp;их активации и&nbsp;включению в&nbsp;процесс обеспечения речи и&nbsp;высших психических функций
                пациента.
              </p>
            </div>
          </div>
          <div className={IMGS_CONTAINER_STYLES}>
            <img src={TkmpSrc} alt="Tранскраниальная микрополяризация (ТКМП)." />
            <div className={CONTAINER_DESCRIPTION_STYLES}>
              <h3 className={CONTAINER_TITLE_STYLES}>Tранскраниальная микрополяризация (ТКМП).</h3>
              <p className={CONTAINER_PARAGRAPH_STYLES}>
                Суть метода - развитие потенциала в&nbsp;требуемой зоне головного мозга. Это
                происходит лишь в&nbsp;том случае, когда эта зона задействована. Принцип метода
                прост, чем активнее воздействовать — тем лучше.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
