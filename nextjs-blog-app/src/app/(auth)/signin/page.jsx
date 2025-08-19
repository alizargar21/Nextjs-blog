"use client";
import React from "react";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import Link from "next/link";
import { useAuth } from "context/authContext";

const schema = yup.object({
  email: yup.string().email("ایمیل نا معتبر است").required("ایمیل الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});
const Signin = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const {signin} = useAuth()
  const onSubmit = async (values) => {
   await signin(values)
  };
  return (
    <div className="border p-4 border-gray-500 rounded-md">
      <h1 className="text-center mb-5 text-2xl">ورود</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          name={"email"}
          label={"ایمیل"}
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          name={"password"}
          label={"رمز عبور"}
          register={register}
          isRequired
          errors={errors}
        />
        <div className="mt-5">
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button type="submit" variant="primary" className={"w-full"}>
              ورود
            </Button>
          )}
              
        </div>
      </form>
        <div>  <Link href="/signup">ثبت نام</Link></div>
    </div>
  );
};

export default Signin;
