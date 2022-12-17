export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image?: string;
}

export interface AuthState {
  accessToken: string;
  user: User | null;
}