import { client } from "./db.js";

const createUserAddress = async (user_id, city, country, street, pincode) => {
  await client.connect();

  const query = `INSERT INTO addresses (user_id,city,country,street,pincode) VALUES($1,$2,$3,$4,$5)`;
  const params = [user_id, city, country, street, pincode];
  const result = await client.query(query, params);

  return result;
};

const getAddressByUserId = async (user_id) => {
  await client.connect();
  const query = `SELECT * FROM addresses where user_id = $1`;
  const param = [user_id];
  const result = await client.query(query, param);
  return result.rows;
};

const updateUserById = async (payload) => {
  await client.connect();

  const { city, country, street, pincode, user_id } = payload;

  const query = `UPDATE addresses SET city = $1 , country = $2, street = $3, pincode = $4 WHERE id = $5`;
  const params = [city, country, street, pincode, user_id];

  let result = client.query(query, params);

  return result;
};

export { createUserAddress, getAddressByUserId, updateUserById };
