import React from "react";
import rehabСenterPdfUrl from "src/resources/publications/monografiya_reatsentr.pdf";
import ImgOneSrc from "src/resources/publications/publication-1.jpg";
import clsx from "clsx";
import styles from "src/app/logic/publication/PublicationPage.module.scss";

/**
 *  Path to publications page
 */
export const PUBLICATIONS_PAGE_PATH = "/publications";
/**
 * Publication page
 */
export const PublicationPage: React.FC = () => {
  const PUBLICATIONS_STYLES = clsx(styles.publications);
  const CARD_STYLES = clsx(styles.card);
  const IMAGE_STYLES = clsx(styles.image);
  const CONTENT_STYLES = clsx(styles.content);
  const TITLE_STYLES = clsx(styles.title);
  const TEXT_STYLES = clsx(styles.text);
  const LINK_STYLES = clsx(styles.link);

  return (
    <section className={PUBLICATIONS_STYLES}>
      <h2>Публикации</h2>
      <article className={CARD_STYLES}>
        <div className={IMAGE_STYLES}>
          <img src={ImgOneSrc} alt="Публикация. Аутизм у детей." />
        </div>
        <div className={CONTENT_STYLES}>
          <h3 className={TITLE_STYLES}>
            Аутизм у детей
            {" "}
            <br />
            (Клиника, диагностика, коррекция)
          </h3>
          <p className={TEXT_STYLES}>
            Докукина Т.В., Гаврилова Т.А., Голубева Т.С., Гребень С.А., Григорьева И.В., Захаревич
            О.Ю., Мартыненко А.И., Марчук С.А., Мисюк Н.Н., Трущенко М.Н., Тукало М.И., Болгарина Л.Е.
          </p>
          <a
            className={LINK_STYLES} href={rehabСenterPdfUrl}
            target="_blank" rel="noreferrer"
          >
            Читать
          </a>
        </div>
      </article>
    </section>
  );
};
