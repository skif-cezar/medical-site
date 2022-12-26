import React from "react";
import {Message, useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import clsx from "clsx";
import styles from "src/app/components/form/Form.module.scss";
import {Button} from "src/app/components/button/Button";

export type FieldsForm = {
  name?: string;
  message?: Message;
  tel?: number;
  comment?: string;
};

/**
 * Form component
 */
export const Form: React.FC = () => {
  const FORM_STYLES = clsx(styles.form);
  const FORM_ERRORS_STYLES = clsx(styles.form__errors);
  const SERVICE_ID = "service_1pf56ee";
  const TEMPLATE_ID = "template_p7be108";
  const PUBLIC_KEY = "4m1dXuenMOCYQ-Olg";

  // eslint-disable-next-line @typescript-eslint/typedef
  const {
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line @typescript-eslint/typedef
    formState: {errors},
  } = useForm<FieldsForm>({mode: "onBlur"});
  const onSubmit = (data: any): void => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
      // eslint-disable-next-line @typescript-eslint/typedef
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result.text);
      // eslint-disable-next-line @typescript-eslint/typedef
      }, (error) => {
        // eslint-disable-next-line no-console
        console.log(error.text);
      });
  };

  return (
    <form
      className={FORM_STYLES} onSubmit={handleSubmit(onSubmit)}
    >
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
        maxLength={40}
      />
      {errors["name"] && <span className={FORM_ERRORS_STYLES}>{errors["name"].message}</span>}
      <input
        {...register("tel", {
          pattern: {
            value:
              /^\+?([0-9]{12})$/,
            message: "Номер должен быть из 12 цифр формата: \"+375XXXXXXXXX\"",
          },
          required: "Поле обязательно к заполнению",
        })}
        type="tel"
        placeholder="Введите телефон"
        maxLength={40}
      />
      {errors["tel"] && <span className={FORM_ERRORS_STYLES}>{errors["tel"].message}</span>}
      <input
        {...register("comment", {
          minLength: {
            value: 5,
            message: "Минимум 5 символов",
          },

        })}
        maxLength={40}
        placeholder="Оставьте сообщение, например, удобное время для связи"
      />
      {errors["comment"] && <span className={FORM_ERRORS_STYLES}>{errors["comment"].message}</span>}
      <Button text="Оставить заявку" />
    </form>
  );
};
