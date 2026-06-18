'use client';

import { Input } from '@/components/ui/inputs';
import { Label } from '@/components/ui/label';
import { EyeCloseIcon, EyeIcon } from '@/icons/icons';
import { authValidation } from '@/lib/zod/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { z } from 'zod';

type Inputs = z.infer<typeof authValidation.register>;

export default function SignupForm() {
  const { t } = useLanguage();
  const form = useForm<Inputs>({
    resolver: zodResolver(authValidation.register),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  async function onSubmit(data: Inputs) {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

    toast.success(
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    );

    setIsLoading(false);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <div>
            <Label htmlFor="email">{t('signup.emailLabel')}</Label>
            <Input
              type="email"
              id="email"
              placeholder={t('signup.emailPlaceholder')}
              disabled={isLoading}
              className="mt-1.5 w-full"
              {...field}
            />
            {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
            )}
          </div>
        )}
      />

      <div>
        <Label htmlFor="password">{t('signup.passwordLabel')}</Label>
        <div className="relative mt-1.5">
          <Input
            type={isShowPassword ? 'text' : 'password'}
            placeholder="••••••••••••••"
            id="password"
            disabled={isLoading}
            className="w-full pr-10"
            {...form.register('password')}
          />
          <button
            type="button"
            onClick={handleShowPassword}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {isShowPassword ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        {form.formState.errors.password && (
          <p className="text-red-500 text-xs mt-1">{form.formState.errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#0A0A0A] hover:bg-[#222] text-white font-medium py-3.5 rounded-full transition-colors mt-2 disabled:opacity-60 flex items-center justify-between px-6"
      >
        <span>{isLoading ? t('signup.loading') : t('signup.createAccount')}</span>
        {!isLoading && <span className="text-lg">→</span>}
      </button>
    </form>
  );
}
