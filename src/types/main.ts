export type QueryConfig = {
  text: string;
  values: (string | number)[];
};

export type UserRegistration = {
  name: string,
  email: string,
  password: string,
  confirmation: string
}

export type User = {
  id: string,
  name: string,
  email: string,
  password: string,
  roles: Array<string>,
  organization: string,
};

export type HashedUser = Omit<User, "id" | "roles" | "organization">;

export type SanitizedUser = Omit<User, "password">;
