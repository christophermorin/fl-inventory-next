"use client";
import { ChangeEvent, useState } from "react";
import BaseInput from "../Inputs/BaseInputs";
import { Button } from "@mui/base";
import axios from "axios";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'

type FormValue = {
  name: string;
  email: string;
  password: string;
  confirmation: string;
};

export function RegisterForm() {
  const router = useRouter();
  const [formValues, setFormValues] = useState<FormValue>({
    name: "",
    email: "",
    password: "",
    confirmation: "",
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/register/",
        formValues
      );
      const user = data.user
      if (user) {
        router.push("/auth/signin");
      }
    } catch (error: any) {
      // I don't want this as any
      // Need a state for errors to show any toasts
      console.log(error.response.data);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <div className="mt-4 flex flex-col items-center">
      <form className="px-4 py-10 flex flex-col gap-4 shadow-md shadow-slate-300">
        <BaseInput
          type="text"
          name="name"
          value={formValues.name}
          onChange={onChange}
          placeholder="User name"
          ariaLabel="User name"
        />
        <BaseInput
          type="email"
          name="email"
          value={formValues.email}
          onChange={onChange}
          placeholder="Email"
          ariaLabel="Email"
        />
        <BaseInput
          type="password"
          name="password"
          value={formValues.password}
          onChange={onChange}
          placeholder="Password"
          ariaLabel="Password"
        />
        <BaseInput
          type="password"
          name="confirmation"
          value={formValues.confirmation}
          onChange={onChange}
          placeholder="Confirmation"
          ariaLabel="Confirmation"
        />
      </form>
      <Button className="
          w-40 mt-4 cursor-pointer disabled:cursor-not-allowed text-md bg-black text-white rounded-md font-semibold px-4 py-2 border-none disabled:opacity-50" onClick={handleSubmit}>Register</Button>
    </div>
  );
}
