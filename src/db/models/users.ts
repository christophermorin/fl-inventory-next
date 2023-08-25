import type { QueryConfig, HashedUser } from "@/types/main"

// Find user in database
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
  return config;
}

// Update user roles and organization on creating an org
export const updateUserOnCreateOrganizationQuery = (org_name: string, userId: string): QueryConfig => {
  const text = `UPDATE users
    SET roles = ARRAY[$1], organization = $2
    WHERE id = $3;`

  const config = {
    text: text,
    values: ["admin", org_name, userId]
  }

  return config;
}
