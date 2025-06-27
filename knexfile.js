import Knex from "knex";

const config = {
  client: "mysql2",
  connection: {
    host: "mariadb", // localhost | mariadb
    port: 3306,
    user: "root",
    password: "root",
    database: "linkup",
  },
  migrations: {
    directory: "./migrations",
  },
};

export default config;