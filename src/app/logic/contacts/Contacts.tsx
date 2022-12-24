import React from "react";
import {Message, useForm} from "react-hook-form";
import clsx from "clsx";
import styles from "src/app/logic/contacts/Contacts.module.scss";
import {Button} from "src/app/components/button/Button";

export type FieldsForm = {
  name?: string;
  message?: Message;
  phone?: number;
};

/**
 * Contacts section
 */
export const Contacts: React.FC = () => {
  const CONTACTS_STYLES = clsx(styles.contacts);
  const CONTENT_STYLES = clsx(styles.contacts__content);
  const CONTAINER_STYLES = clsx(styles.contacts__container);
  const CONTENT_TITLE_STYLES = clsx(styles.contacts__title);
  const FORM_STYLES = clsx(styles.form);
  const FORM_ERRORS_STYLES = clsx(styles.form__errors);
  const CONTACTS_ADRESS_STYLES = clsx(styles.contacts__adress);

  // eslint-disable-next-line @typescript-eslint/typedef
  const {register, handleSubmit, watch, reset, formState: {errors}} = useForm<FieldsForm>({mode: "onBlur"});
  const onSubmit = (data: any): void => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  // eslint-disable-next-line no-console
  console.log(watch("name"));

  return (
    <section className={CONTACTS_STYLES} id="contacts">
      <article className={CONTENT_STYLES}>
        <article className={CONTAINER_STYLES}>
          <h2 className={CONTENT_TITLE_STYLES}>Оставить заявку</h2>
          <p>
            Оставьте свои контакты. Менеджер перезвонит в&nbsp;удобное вам время и ответит на все
            вопросы.
          </p>
          <form className={FORM_STYLES} onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", {
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа",
                },
                required: "Поле обязательно к заполнению",
              })}
              type="text"
              placeholder="Ваше имя"
            />
            {errors["name"] && <span className={FORM_ERRORS_STYLES}>{errors["name"].message}</span>}
            <input
              {...register("phone", {
                pattern: {
                  value: /^\+?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/,
                  message: "Номер должен быть формата: \"+375-XX-XXX-XX-XX\"",
                },
                required: "Поле обязательно к заполнению",
              })}
              type="tel"
              placeholder="Введите телефон"
            />
            {errors["phone"] && <span className={FORM_ERRORS_STYLES}>{errors["phone"].message}</span>}
            <Button text="Оставить заявку" />
          </form>
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
