import { Link } from "react-router-dom";
import { SignIn } from "@clerk/react";

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Sign In</h1>
        <SignIn path="/login" routing="path" signUpUrl="/signup" />
        <div className="auth-footer">
          <span>Don't have an account?</span>
          <Link to="/signup">Create one</Link>
        </div>
      </div>
    </div>
  );
}
