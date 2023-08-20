import type { QueryConfig, HashedUser } from "@/types/main"

export const findUniqueUser = (email: string): QueryConfig  => {
  const text = `SELECT * FROM users WHERE email = $1;`

  const config = {
    text: text,
    values: [email]
  }

  return config;
}

// register user
export const registerUser = (user: HashedUser): QueryConfig => {
  const {name, email, password} = user;

  const text = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`

  const config = {
    text: text,
    values: [name, email, password,]
  }
  console.log(config)
  return config;
}
