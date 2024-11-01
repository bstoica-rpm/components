import { Profile } from "./Profile";

export interface User {
  id_token: string;
  session_state: string | undefined;
  access_token: string;
  refresh_token: string | undefined;
  token_type: string;
  scope: string;
  profile: Profile;
  expires_at: number;
  state: any;
  toStorageString: () => string;
  readonly expires_in: number;
  readonly expired: boolean;
  readonly scopes: string[];
}
