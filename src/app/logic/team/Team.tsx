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
              Это Маша, наш главный дизайнер. Она отвечает за дизайн-проект, приезжает к вам домой,
              общается и помогает сделать вашу квартиру красивой и уютной.
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
              С нашим менеджером Сашей вы познакомитесь в первую очередь. Она проконсультирует вас,
              соберёт все документы и ответит на все вопросы.
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};
