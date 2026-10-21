'use client';

import { register } from '@/actions/auth/register';
import AuthFormFooter from '@/components/auth/auth-form-footer';
import AuthFormHeader from '@/components/auth/auth-form-header';
import Button from '@/components/ui/button';
import InputField from '@/components/ui/input-field';
import { InputFieldProps, RegisterFormState } from '@/types/auth-form';
import { useActionState } from 'react';

export default function Register() {
  const initialState: RegisterFormState = { errors: {} };

  const [state, formAction, isPending] = useActionState(register, initialState);

  const inputFields: InputFieldProps<RegisterFormState>[] = [
    { name: 'email', label: 'Email Address' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'confirmPassword', label: 'Confirm password', type: 'password' },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="bg-surface-2 flex flex-col items-center gap-6 rounded-2xl p-10">
        <AuthFormHeader
          title="Create Account"
          description="Create your collector credentials to manage squads"
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
        <AuthFormFooter linkLabel="Sign in" message={` Already have an account?`} href="/login" />
      </div>
    </div>
  );
}
