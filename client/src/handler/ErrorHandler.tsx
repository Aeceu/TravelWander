import { useEffect } from "react";

type TLoginErrorHandler = {
  data: TLogin;
  setError: (error: string) => void;
};

export const LoginErrorHandler = ({ data, setError }: TLoginErrorHandler) => {
  useEffect(() => {
    if (data.email || data.password) {
      setError("");
    }
  }, [data.email, data.password]);
};

type TSignupErrorHandler = {
  data: TSignup;
  setError: (error: string) => void;
};

export const SignupErrorHandler = ({ data, setError }: TSignupErrorHandler) => {
  useEffect(() => {
    if (data.email || data.firstname || data.lastname || data.password) {
      setError("");
    }
  }, [data.email, data.firstname, data.lastname, data.password]);
};
