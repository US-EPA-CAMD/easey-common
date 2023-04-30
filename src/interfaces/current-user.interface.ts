export interface UserPermissionSet {
  facId: number;
  orisCode: number;
  permissions: string[];
}

export interface CurrentUser {
  userId: string;
  sessionId: string;
  expiration: string;
  clientIp: string;
  facilities: UserPermissionSet[];
  roles: string[];
}
