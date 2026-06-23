import { Link } from "react-router-dom";
import { UserButton, SignOutButton, Show, SignInButton, SignUpButton } from "@clerk/react";

export default function HomePage() {
  return (
    <main className="home-page">
      <h1>Welcome to Chat App</h1>
      <Show when="signed-in">
        <p>You are signed in. Use the menu to access your profile or sign out.</p>
        <div className="auth-actions">
          <UserButton />
          <SignOutButton />
        </div>
      </Show>
      <Show when="signed-out">
        <p>Please sign in or sign up to continue.</p>
        <div className="auth-actions">
          <SignInButton mode="modal">Sign In</SignInButton>
          <SignUpButton mode="modal">Sign Up</SignUpButton>
        </div>
        <div className="auth-help">
          <span>Or use explicit pages:</span>
          <Link to="/login">/login</Link>
          <Link to="/signup">/signup</Link>
        </div>
      </Show>
    </main>
  );
}
