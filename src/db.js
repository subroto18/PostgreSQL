import pkg from "pg";
const { Client, Pool } = pkg;
const client = new Client({
  connectionString:
    "postgresql://testDb_owner:lfYXoF9iuk1e@ep-patient-wood-a5mgtt3q.us-east-2.aws.neon.tech/testDb?sslmode=require",
});
export { client };
