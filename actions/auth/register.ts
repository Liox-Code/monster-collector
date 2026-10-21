'use server';

import { RegisterFormState } from '@/types/auth-form';

export async function register(_prevState: RegisterFormState | undefined, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  const errors: RegisterFormState['errors'] = {};

  if (!email) errors.email = 'Email is required.';
  if (!password) errors.password = 'Password is required.';
  if (!confirmPassword) errors.confirmPassword = 'Confirm Password is required.';

  if (Object.keys(errors).length > 0) return { errors };

  return { errors: {} };
}
