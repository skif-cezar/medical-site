import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/contacts/Contacts.module.scss";
import {Form} from "src/app/components/form/Form";

/**
 * Contacts section
 */
export const Contacts: React.FC = () => {
  const CONTACTS_STYLES = clsx(styles.contacts);
  const CONTENT_STYLES = clsx(styles.contacts__content);
  const CONTAINER_STYLES = clsx(styles.contacts__container);
  const CONTENT_TITLE_STYLES = clsx(styles.contacts__title);
  const CONTACTS_ADRESS_STYLES = clsx(styles.contacts__adress);

  return (
    <section className={CONTACTS_STYLES} id="contacts">
      <article className={CONTENT_STYLES}>
        <article className={CONTAINER_STYLES}>
          <h2 className={CONTENT_TITLE_STYLES}>Оставить заявку</h2>
          <p>
            Оставьте свои контакты. Менеджер перезвонит в&nbsp;удобное вам время и ответит на все
            вопросы.
          </p>
          <Form />
        </article>
        <div className={CONTACTS_ADRESS_STYLES}>
          <iframe
            // eslint-disable-next-line max-len
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A7364f3369de2a65f2316199f1ca8856e94d65427752efb5fe251c3e22c063c16&amp;source=constructor&amp;lang=ru_RU"
            width="590"
            height="624"
            frameBorder="0"
            title="г. Минск, Долгиновский тракт, 152"
          />
        </div>
      </article>
    </section>
  );
};
