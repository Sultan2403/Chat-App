import { Link } from "react-router-dom";
import { SignUp } from "@clerk/react";

export default function SignupPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <SignUp path="/signup" routing="path" signInUrl="/login" />
        <div className="auth-footer">
          <span>Already have an account?</span>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
