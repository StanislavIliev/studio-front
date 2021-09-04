import { User } from "src/app/models/user";

export interface AuthState {
 user: User | null;
 isLogged: boolean;
 role: string;
}
export const initialState: AuthState= {
  user: null,
  isLogged: false,
  role: null
};
