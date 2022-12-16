export interface UserPermissionSet {
  id: number;
  permissions: string;
}

export interface CurrentUser {
  userId: string;
  sessionId: string;
  expiration: string;
  clientIp: string;
  isAdmin: boolean;
  permissionSet: UserPermissionSet[];
}
