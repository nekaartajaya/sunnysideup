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
  auth: any;
  accessToken: string;
  user: User | null;
}
