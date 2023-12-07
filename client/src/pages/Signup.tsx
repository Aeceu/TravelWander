import AuthInfo from "../components/AuthInfo";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className="h-screen w-full flex justify-between">
      <AuthInfo />
      <SignupForm />
    </div>
  );
};

export default Signup;
