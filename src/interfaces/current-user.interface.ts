export interface UserRole {
  orisCode: string,
  role: string,
}

export interface CurrentUser {
  userId: string,
  sessionId: string,
  expiration: string,
  clientIp: string,
  isAdmin: boolean,
  roles: UserRole[],
}