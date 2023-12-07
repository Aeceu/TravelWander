import AuthInfo from "../components/AuthInfo";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-between">
      <AuthInfo />
      <LoginForm />
    </div>
  );
};

export default Login;
