"use client";
import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import { useAuth } from "context/authContext";
// export const metedata = {
//   title: "ثبت نام",
// };
const schema = yup.object({
  name: yup
    .string()
    .min(5, "نام و نام خانوادگی نا معتبر است")
    .max(30)
    .required("نام و نام خانوادگی الزامی است"),
  email: yup.string().email("ایمیل نا معتبر است").required("ایمیل الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});
const Signup = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { signup } = useAuth();
  const onSubmit = async (values) => {
    await signup(values);
  };
  return (
    <div className="border p-4 border-gray-500 rounded-md">
      <h1 className="text-center mb-5 text-2xl">ثبت نام</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          name={"name"}
          label={"نام و نام خانوادگی"}
          register={register}
          isRequired
          errors={errors}
        />
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
              تایید
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Signup;
