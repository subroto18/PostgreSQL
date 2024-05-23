import {
  createUserAddress,
  getAddressByUserId,
  updateUserById,
} from "./address.js";

// user_id, city, country, street, pincode
//createUserAddress(1, "agartala", "india", "santir bazar", 744199); // create address

// get address by user id

//const result = await getAddressByUserId(1);

// update address by user id

const payload = {
  city: "Gurgaon",
  country: "india",
  street: "Kahnai village",
  pincode: "122003",
  id: 1,
};
const result = await updateUserById(payload);

console.log(result);
