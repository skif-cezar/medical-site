import React from "react";
import rehabСenterPdfUrl from "src/resources/publications/monografiya_reatsentr.pdf";
import longitudinalObservationPdfUrl from "src/resources/publications/autdd_2021_n1_Dokukina_et_al.pdf";
import magneticStimulationPdfUrl from "src/resources/publications/YEL_RB_4_2020_Nevrologiya.pdf";
import ImgOneSrc from "src/resources/publications/publication-1.jpg";
import ImgTwoSrc from "src/resources/publications/publication-2.jpg";
import ImgThreeSrc from "src/resources/publications/publication-3.jpg";
import ImgFourSrc from "src/resources/publications/publication-4.jpg";
import clsx from "clsx";
import styles from "src/app/logic/publication/PublicationPage.module.scss";
import {Button} from "src/app/components/button/Button";
import {NavLink} from "react-router-dom";

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
            О.Ю., Мартыненко А.И., Марчук С.А., Мисюк Н.Н., Трущенко М.Н., Тукало М.И., Болгарина
            Л.Е.
          </p>
          <a
            className={LINK_STYLES} href={rehabСenterPdfUrl}
            target="_blank" rel="noreferrer"
          >
            Читать
          </a>
        </div>
      </article>
      <article className={CARD_STYLES}>
        <div className={IMAGE_STYLES}>
          <img
            src={ImgTwoSrc}
            alt="Публикация. Лонгитюдное наблюдение за психосоциальным и интеллектуальным развитием пациента с аутизмом."
          />
        </div>
        <div className={CONTENT_STYLES}>
          <h3 className={TITLE_STYLES}>
            Лонгитюдное наблюдение за психосоциальным и интеллектуальным развитием пациента с аутизмом
          </h3>
          <p className={TEXT_STYLES}>
            Осипчик С.И., Григорьева Н.К., Алыко Т.Н., Лапыш О.М., Трущенко М.Н.
          </p>
          <a
            className={LINK_STYLES} href={longitudinalObservationPdfUrl}
            target="_blank" rel="noreferrer"
          >
            Читать
          </a>
        </div>
      </article>
      <article className={CARD_STYLES}>
        <div className={IMAGE_STYLES}>
          <img
            src={ImgThreeSrc}
            alt="Публикация. Транскраниальная магнитная стимуляция в лечении ребенка с аутизмом."
          />
        </div>
        <div className={CONTENT_STYLES}>
          <h3 className={TITLE_STYLES}>
            Транскраниальная магнитная стимуляция в лечении ребенка с аутизмом
          </h3>
          <p className={TEXT_STYLES}>
            Докукина Т.В., Митюкова Т.А., Осипчик С.И., Тукало М.И., Полулях О.Е.,
            Григорьева Н.К., Марчук С.А., Алыко Т.Н., Лапыш О.М., Трущенко М.Н., Богданович И.П.,
            Короткевич Т.В., Болгарина Л.Н.
          </p>
          <a
            className={LINK_STYLES} href="https://www.elibrary.ru/item.asp?id=44561914"
            target="_blank" rel="noreferrer"
          >
            Читать
          </a>
        </div>
      </article>
      <article className={CARD_STYLES}>
        <div className={IMAGE_STYLES}>
          <img
            src={ImgFourSrc}
            alt="Публикация. Транскраниальная магнитная стимуляция в лечении ребенка с аутизмом."
          />
        </div>
        <div className={CONTENT_STYLES}>
          <h3 className={TITLE_STYLES}>
            Транскраниальная магнитная стимуляция в лечении ребенка с аутизмом
          </h3>
          <p className={TEXT_STYLES}>
            Докукина Т.В., Митюкова Т.А., Осипчик С.И., Тукало М.И., Полулях О.Е.,
            Григорьева Н.К., Марчук С.А., Алыко Т.Н., Лапыш О.М., Трущенко М.Н.,
            Богданович И.П., Короткевич Т.В., Болгарина Л.Н.
          </p>
          <a
            className={LINK_STYLES} href={`${magneticStimulationPdfUrl}#page=96`}
            target="_blank" rel="noreferrer"
          >
            Читать
          </a>
        </div>
      </article>
      <NavLink to="/">
        <Button text="Вернуться на главную" />
      </NavLink>
    </section>
  );
};
