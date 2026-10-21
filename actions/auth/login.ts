'use server';

import { LoginFormState } from '@/types/auth-form';

export async function loginAction(_prevState: LoginFormState | undefined, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const errors: LoginFormState['errors'] = {};

  if (!email) {
    errors.email = 'Email is required.';
  }

  if (!password) {
    errors.password = 'Password is required.';
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return { errors: {} };
}
