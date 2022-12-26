import React from "react";
import {Message, useForm} from "react-hook-form";
import clsx from "clsx";
import styles from "src/app/components/form/Form.module.scss";
import {Button} from "src/app/components/button/Button";

export type FieldsForm = {
  name?: string;
  message?: Message;
  phone?: number;
  comment?: string;
};

/**
 * Form component
 */
export const Form: React.FC = () => {
  const FORM_STYLES = clsx(styles.form);
  const FORM_ERRORS_STYLES = clsx(styles.form__errors);

  // eslint-disable-next-line @typescript-eslint/typedef
  const {
    register,
    handleSubmit,
    watch,
    reset,
    // eslint-disable-next-line @typescript-eslint/typedef
    formState: {errors},
  } = useForm<FieldsForm>({mode: "onBlur"});
  const onSubmit = (data: any): void => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  // eslint-disable-next-line no-console
  console.log(watch("name"));

  return (
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
        maxLength={40}
      />
      {errors["name"] && <span className={FORM_ERRORS_STYLES}>{errors["name"].message}</span>}
      <input
        {...register("phone", {
          pattern: {
            value:
              /^\+?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/,
            message: "Номер должен быть формата: \"+375-XX-XXX-XX-XX\"",
          },
          required: "Поле обязательно к заполнению",
        })}
        type="tel"
        placeholder="Введите телефон"
        maxLength={40}
      />
      {errors["phone"] && <span className={FORM_ERRORS_STYLES}>{errors["phone"].message}</span>}
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
