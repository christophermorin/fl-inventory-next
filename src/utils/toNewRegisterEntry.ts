import type { UserRegistration } from "@/types/main";
import { isString } from "./typeGuards";
import validator from "validator";

const parseUsername = (username: unknown): string => {
  if (!isString(username)) {
    throw new Error("Incorrect or missing username");
  }
  return username;
};

const parseEmail = (email: unknown): string => {
  if (!isString(email)) {
    throw new Error("Incorrect or missing email");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Incorrect or missing email format");
  }

  return email;
};

const parsePassword = (password: unknown): string => {
  if (!isString(password)) {
    throw new Error("Incorrect or missing password");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is weak");
  }

  return password;
};

export const toNewRegistrationEntry = (object: unknown): UserRegistration => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "email" in object &&
    "password" in object &&
    "confirmation" in object
  ) {
    if (object.password !== object.confirmation) {
      throw new Error("Passwords must match");
    }

    const user: UserRegistration = {
      name: parseUsername(object.name),
      email: parseEmail(object.email),
      password: parsePassword(object.password),
      confirmation: parsePassword(object.confirmation),
    };
    return user;
  }
  throw new Error("Incorrect data: some fields are missing");
};
