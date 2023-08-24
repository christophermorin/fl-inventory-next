"use client";
import { ChangeEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BaseInput from "../Inputs/BaseInputs";
import { Button } from "@mui/base";
import { signIn } from "next-auth/react";

type FormValue = {
  email: string;
  password: string;
};
// https://codevoweb.com/nextjs-use-custom-login-and-signup-pages-for-nextauth-js/
export function SignInForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<FormValue>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ email: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
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
      <form onSubmit={onSubmit} className="px-4 py-10 flex flex-col gap-4 shadow-md shadow-slate-300">
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
      <Button type="submit" className="
          w-40 mt-4 cursor-pointer disabled:cursor-not-allowed text-md bg-black text-white rounded-md font-semibold px-4 py-2 border-none disabled:opacity-50">Sign In</Button>
      </form>
    </div>
  );
}
