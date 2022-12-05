import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/contacts/Contacts.module.scss";
import {Button} from "src/app/components/button/Button";

/**
 * Contacts section
 */
export const Contacts: React.FC = () => {
  const CONTACTS_STYLES = clsx(styles.contacts);
  const CONTENT_STYLES = clsx(styles.contacts__content);
  const CONTAINER_STYLES = clsx(styles.contacts__container);
  const CONTENT_TITLE_STYLES = clsx(styles.contacts__title);
  const FORM_STYLES = clsx(styles.form);
  const CONTACTS_ADRESS_STYLES = clsx(styles.contacts__adress);

  return (
    <section className={CONTACTS_STYLES}>
      <article className={CONTENT_STYLES}>
        <article className={CONTAINER_STYLES}>
          <h2 className={CONTENT_TITLE_STYLES}>Оставить заявку</h2>
          <p>
            Оставьте свои контакты. Менеджер перезвонит в&nbsp;удобное вам время и ответит на все
            вопросы.
          </p>
          <form className={FORM_STYLES} action="#">
            <input
              type="text" name="name"
              placeholder="Ваше имя" required
            />
            <input
              type="tel" name="phone"
              placeholder="Введите телефон" required
            />
            <Button text="Оставить заявку" />
          </form>
        </article>
        <div className={CONTACTS_ADRESS_STYLES}>
          <iframe
            // eslint-disable-next-line max-len
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad1c9626ab20e27bd9e211ca9d329528bf7e79b8dabfc96491ef26d282323b494&amp;source=constructor"
            width="590"
            height="624"
            frameBorder="0"
            title="г. Санкт-петербург, ул. Большая Конюшенная, 19"
          />
        </div>
      </article>
    </section>
  );
};
