import { OidcAddress } from "./OidcAddress";

export interface Profile {
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  iat: number;
  auth_time: number;
  nonce: number;
  at_hash: string;
  acr: string;
  amr: string[];
  azp: string;
  sid: string;
  [key: string]: any;
  name: string;
  given_name: string;
  family_name: string;
  middle_name: string;
  nickname: string;
  preferred_username: string;
  profile: string;
  picture: string;
  website: string;
  email: string;
  email_verified: boolean;
  gender: string;
  birthdate: string;
  zoneinfo: string;
  locale: string;
  phone_number: string;
  phone_number_verified: boolean;
  address: OidcAddress;
  updated_at: number;
}
