import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/team/Team.module.scss";
import employeeOneSrc from "src/resources/employee-1.jpg";
import employeeTwoSrc from "src/resources/employee-2.jpg";
import employeeThreeSrc from "src/resources/employee-3.jpg";
import employeeFourSrc from "src/resources/employee-4.jpg";

/**
 * Team section
 */
export const Team: React.FC = () => {
  const TEAM_STYLES = clsx(styles.team);
  const TITLE_STYLES = clsx(styles.team__title);
  const CONTAINER_STYLES = clsx(styles.team__container);
  const CONTENT_STYLES = clsx(styles.team__content);
  const DESCRIPTION_STYLES = clsx(styles.team__description);
  const FULL_NAME_STYLES = clsx(styles.team__full_name);

  return (
    <section className={TEAM_STYLES} id="employees">
      <h2 className={TITLE_STYLES}>Сотрудники</h2>
      <article className={CONTAINER_STYLES}>
        <div className={CONTENT_STYLES}>
          <figure>
            <img
              src={employeeOneSrc}
              alt="Сотрудник Татьяна Васильевна Докукина. Доктор медицинских наук."
              width="260"
              height="260"
            />
            <figcaption className={DESCRIPTION_STYLES}>
              <p className={FULL_NAME_STYLES}>
                <b>Докукина Татьяна Васильевна</b>
              </p>
              <em>Доктор медицинских наук.</em>
            </figcaption>
          </figure>
          <figure>
            <img
              src={employeeTwoSrc}
              alt="Сотрудник Ольга Михайловна Лапыш. Врач психиатр-нарколог."
              width="260"
              height="260"
            />
            <figcaption className={DESCRIPTION_STYLES}>
              <p className={FULL_NAME_STYLES}>
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
          <figure>
            <img
              src={employeeThreeSrc}
              alt="Сотрудник Мария Николаевна Трущенко. Врач."
              width="260"
              height="260"
            />
            <figcaption className={DESCRIPTION_STYLES}>
              <p className={FULL_NAME_STYLES}>
                <b>Трущенко Мария Николаевна</b>
              </p>
              <em>Медицинский психолог, нейропсихолог.</em>
            </figcaption>
          </figure>
          <figure>
            <img
              src={employeeFourSrc}
              alt="Сотрудник Наталия Владимировна Громова. Медицинский (клинический) психолог."
              width="260"
              height="260"
            />
            <figcaption className={DESCRIPTION_STYLES}>
              <p className={FULL_NAME_STYLES}>
                <b>Громова Наталия Владимировна</b>
              </p>
              <em>Медицинский (клинический) психолог.</em>
              <p>
                <em>
                  Научный сотрудник отдела психических и поведенческих расстройств,
                  заведующий образовательным центром РНПЦ психического здоровья.
                </em>
              </p>
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};
