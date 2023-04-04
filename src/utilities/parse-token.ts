import { CurrentUser } from "../interfaces";

export const parseToken = (token: string) => {
  const user: CurrentUser = {
    userId: null,
    sessionId: null,
    expiration: null,
    clientIp: null,
    facilities: [],
    roles: [],
  };

  const arr = token.split("&");
  arr.forEach((element) => {
    const keyValue = element.split("=");

    if (keyValue[0] === "facilities") {
      const permissions = JSON.parse(keyValue[1]);
      user.facilities = permissions;
    } else if (keyValue[0] === "roles") {
      const roles = JSON.parse(keyValue[1]);
      user.roles = roles;
    } else {
      user[keyValue[0]] = keyValue[1];
    }
  });

  return user;
};

export default parseToken;
