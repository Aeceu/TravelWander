import jwt from "jsonwebtoken";

type TCreateToken = {
  userdata: { id: String; email: String; role: string };
  key: string;
};

export const HandleAccessToken = ({ userdata, key }: TCreateToken) => {
  const token = jwt.sign(
    {
      userdata: {
        id: userdata.id,
        role: userdata.role,
        email: userdata.email,
      },
    },
    key,
    {
      expiresIn: "10s",
    }
  );
  return token;
};
export const HandleRefreshToken = ({ userdata, key }: TCreateToken) => {
  const token = jwt.sign(
    {
      userdata: {
        id: userdata.id,
        role: userdata.role,
        email: userdata.email,
      },
    },
    key,
    {
      expiresIn: "1d",
    }
  );
  return token;
};
