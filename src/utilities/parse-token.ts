import { CurrentUser } from "../interfaces/current-user.interface";

export const parseToken = (token: string) => {
  const user: CurrentUser = {
    userId: null,
    sessionId: null,
    expiration: null,
    clientIp: null,
    isAdmin: false,
    roles: [],
  };

  const arr = token.split("&");
  arr.forEach((element) => {
    const keyValue = element.split("=");

    if(keyValue[0] === "permissions"){
      const permissions = JSON.parse(keyValue[1]);
      user.isAdmin = permissions.isAdmin;
      user.roles = permissions.facilities;
    }else{
      user[keyValue[0]] = keyValue[1];  
    }
  });

  return user;
};

export default parseToken;
