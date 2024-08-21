import React from "react";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "@/schemas";

type LoginInputs = z.infer<typeof UserSchema>;

export default function LoginBody() {
  const methods = useForm<LoginInputs>({
    resolver: zodResolver(UserSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (result?.ok) {
        router.push("/");
      } else {
        console.log(result?.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="login-body py-[0.9375rem] bg-gray-200">
      <div className="container-body flex flex-col items-center p-5 rounded-[1.25rem] mx-auto xs:max-w-full md:max-w-[40rem] bg-[#fff]">
        <div className="l-b-header border-b-[1px] border-[#f5f8fa] mb-5">
          <h2 className="font-sans flex justify-center items-center gap-1 text-2xl text-black leading-[1.875rem] mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-[#2962ff]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            Hızlı Giriş
          </h2>
        </div>
        <div className="l-b-tab flex justify-center mb-[0.9375rem] bg-[#f5f8fa] rounded-xl p-[5px] w-1/2">
          <a
            href="#"
            className="flex justify-center items-center gap-1 bg-[#fff] color-[#272d33] rounded-lg shadow-[0_5px_20px_0px_rgba(0,0,0,0.1)] h-10 text-[#8f98a1] w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <span className="text-sm">E-posta Adresi</span>
          </a>
        </div>
        <FormProvider {...methods}>
          <form
            className="l-b-form flex flex-col gap-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="E-Posta"
                className={`border-[1px] h-[2.8125rem] rounded-lg text-sm px-4 outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("password")}
                type="password"
                id="password"
                placeholder="Şifre"
                className={`border-[1px] h-[2.8125rem] rounded-lg text-sm px-4 outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="l-b-f-login-button">
              <button
                type="submit"
                className="flex justify-center items-center w-full h-[2.8125rem] bg-[#2962ff] text-[#fff] rounded-[1.4375rem] text-[0.9375rem]"
              >
                Giriş Yap
              </button>
            </div>
            <div className="l-b-f-register-button">
              <a
                href="/"
                className="flex justify-center items-center h-[2.8125rem] bg-[#fff] text-[#2962ff] rounded-[1.4375rem] text-[0.9375rem] border-[1px] border-[#2962ff]"
              >
                Yeni Hesap Oluştur
              </a>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}
