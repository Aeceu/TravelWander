export type TUser = {
  id: string;
  firstname: string;
  lastname: string;
  role: string;
  refreshToken: string | null;
  email: string;
  password?: string;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
} | null;
