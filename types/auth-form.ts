import { ComponentProps } from 'react';

type FormStateWithErrors = { errors?: Record<string, string> };

type FormKeys<T extends FormStateWithErrors> = keyof NonNullable<T['errors']>;

export type InputBaseProps<T extends FormStateWithErrors = FormStateWithErrors> = {
  name: FormKeys<T>;
  label: string;
  actionLabel?: string;
  actionLabelHref?: string;
  error?: string;
};

export type InputFieldProps<T extends FormStateWithErrors = FormStateWithErrors> =
  ComponentProps<'input'> & InputBaseProps<T>;

export type LoginErrors = {
  email?: string;
  password?: string;
};

export type LoginFormState = {
  errors: LoginErrors;
};

export type RegisterErrors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type RegisterFormState = {
  errors: RegisterErrors;
};
