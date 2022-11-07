export interface OauthUserInfo {
  provider: string;
  thirdPartyId: string;
  profImg: string;
  locale: string;
}

export interface userExists {
  access_token: string;
  refresh_token: string;
}

export interface TokenState {
  isAuthenticated: boolean;
  accessToken: string;
}
