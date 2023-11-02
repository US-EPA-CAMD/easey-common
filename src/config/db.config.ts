require("dotenv").config();
import { registerAs } from "@nestjs/config";

let pgHost = process.env.EASEY_DB_HOST || "database";
let pgPort = +process.env.EASEY_DB_PORT || 5432;
let pgUser = process.env.EASEY_DB_USER || "postgres";
let pgPwd = process.env.EASEY_DB_PWD || "password";
let pgDb = process.env.EASEY_DB_NAME || "postgres";

if (process.env.VCAP_SERVICES) {
  const dbService = process.env.EASEY_DB_SERVICE || "camd-pg-db";
  const vcapSvc = JSON.parse(process.env.VCAP_SERVICES);
  const rdsServices = vcapSvc["aws-rds"];
  const svcCredentials = rdsServices
    .find(o => o.name === dbService)
    .credentials;

  pgHost = svcCredentials.host;
  pgPort = +svcCredentials.port;
  pgUser = svcCredentials.username;
  pgPwd = svcCredentials.password;
  pgDb = svcCredentials.name;
}

export const dbConfig = registerAs("database", () => ({
  host: pgHost,
  port: pgPort,
  user: pgUser,
  pwd: pgPwd,
  name: pgDb,
}));
