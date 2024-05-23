import { client } from "./db.js";

const createUser = async (username, email, password) => {
  let isUserNameOrEmailExist = await checkUserIsPresent();
  console.log(isUserNameOrEmailExist);
  //   await client.connect();
  //   const query = `INSERT INTO users (username,  email, password) VALUES ($1,$2,$3)`;
  //   const result = await client.query(query, [username, email, password]);
  //   console.log(result, "result");
};

const checkUserIsPresent = async (username, email) => {
  await client.connect();
  const params = [username];

  const query = `SELECT * FROM users WHERE username = $1`;
  const result = await client.query(query, params);

  return result;
};

export { createUser, checkUserIsPresent };
