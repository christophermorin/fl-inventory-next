import * as React from "react";
import { Input } from "@mui/base/Input";
import { ChangeEvent } from "react";

type Props = {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  ariaLabel: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function BaseInput({
  type,
  name,
  value,
  placeholder,
  ariaLabel,
  onChange,
}: Props) {
  return (
    <Input
      slotProps={{
        input: {
          className:
            "w-80 text-md font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-300  focus:shadow-outline-black focus:shadow-lg border border-solid border-slate-300 hover:border-slate-400 focus:border-slate-600 bg-white text-slate-900  focus-visible:outline-0 outline-none",
        },
      }}
      aria-label={ariaLabel}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
