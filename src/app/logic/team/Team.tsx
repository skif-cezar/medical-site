import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/team/Team.module.scss";
import employeeOneSrc from "src/resources/employee-1.jpg";
import employeeTwoSrc from "src/resources/employee-2.jpg";

/**
 * Team section
 */
export const Team: React.FC = () => {
  const TEAM_STYLES = clsx(styles.team);
  const TITLE_STYLES = clsx(styles.team__title);
  const CONTAINER_STYLES = clsx(styles.team__container);
  const CONTENT_STYLES = clsx(styles.team__content);
  const DESCRIPTION_STYLES = clsx(styles.team__description);

  return (
    <section className={TEAM_STYLES} id="employees">
      <h2 className={TITLE_STYLES}>Сотрудники</h2>
      <article className={CONTAINER_STYLES}>
        <div className={CONTENT_STYLES}>
          <figure>
            <img
              src={employeeOneSrc}
              alt="Сотрудник Татьяна Васильевна Докукина. Главный врач."
              width="320"
              height="253"
            />
            <figcaption className={DESCRIPTION_STYLES}>
              <p>
                <b>Докукина Татьяна Васильевна</b>
              </p>
              <em>Доктор медицинских наук.</em>
            </figcaption>
          </figure>
          <figure>
            <img
              src={employeeTwoSrc}
              alt="Сотрудник Ольга Михайловна Лапыш. Врач."
              width="320"
              height="253"
            />
            <figcaption className={DESCRIPTION_STYLES}>
              <p>
                <b>Лапыш Ольга Михайловна</b>
              </p>
              <em>Врач психиатр-нарколог.</em>
              <p>
                <em>
                  Заведующая отделением&#42889;
                  <br />
                  &ldquo;3&ndash;е&nbsp;психиатрическое отделение для лечения психических
                  расстройств вследствие эпилепсии&ldquo;
                </em>
              </p>
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};
