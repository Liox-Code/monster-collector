'use client';

import { loginAction } from '@/actions/auth/login';
import AuthFormFooter from '@/components/auth/auth-form-footer';
import AuthFormHeader from '@/components/auth/auth-form-header';
import Button from '@/components/ui/button';
import InputField from '@/components/ui/input-field';
import { InputFieldProps, LoginFormState } from '@/types/auth-form';
import { useActionState } from 'react';

export default function Login() {
  const initialState: LoginFormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  const inputFields: InputFieldProps<LoginFormState>[] = [
    {
      name: 'email',
      label: 'Email Address',
    },
    {
      name: 'password',
      label: 'Password',
      actionLabel: 'Forgot password?',
      actionLabelHref: '',
      type: 'password',
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="bg-surface-2 flex flex-col items-center gap-6 rounded-2xl p-10">
        <AuthFormHeader
          title="Sign In"
          description="Enter your credentials to access your roster matrix"
        />
        <form action={formAction} className="flex w-full flex-col gap-5 font-mono text-sm">
          {inputFields.map((inputField) => {
            return (
              <div key={inputField.name}>
                <InputField {...inputField} error={state.errors[inputField.name]} />
              </div>
            );
          })}
          <Button buttonType="submit" label="Sign In" disabled={isPending} />
        </form>
        <AuthFormFooter linkLabel="Sign up" message={`Don't have an account?`} href="/register" />
      </div>
    </div>
  );
}
