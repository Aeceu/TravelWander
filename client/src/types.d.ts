type TUser = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  refreshToken: string;
  createdAt: string;
  updatedAt: string;
};

type TLogin = {
  email: string;
  password: string;
};

type TSignup = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
