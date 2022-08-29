import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Illustration from "../component/Illustration";
import InputText from "../component/InputText";
import Lable from "../component/Lable";
import { useAuth } from "../context/AuthContext";

function Signup() {
  window.document.title = "Create accout now!";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { createAccount, currentUser } = useAuth();
  const navigate = useNavigate();

  console.log(currentUser);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password not matched!");
    }

    try {
      setLoading(true);
      setError("");
      await createAccount(email, password, username);
      navigate("/chat");
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError("Faild to create an Account!");
    }
  }

  return (
    <div className="container mx-auto px-4 first-letter:">
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 h-screen">
        <Illustration src="./img/signup.jpg" alt="signup" />
        <form className="w-full" onSubmit={handleSubmit}>
          <h2 className="text-center uppercase font-bold text-2xl">
            Create an account
          </h2>
          {/* error message */}
          {error && (
            <p className="bg-red-200 py-3 mt-4 text-center rounded-md">
              {/* Don't create account! try again */}
              {error}
            </p>
          )}
          {/* error message end */}
          <div className="my-3">
            <Lable title={"Name"} />
            <InputText
              type={"text"}
              placeholder="Name..."
              id="Name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="my-3">
            <Lable title={"Email"} />
            <InputText
              type={"email"}
              placeholder="Email..."
              id="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-3">
            <Lable title={"Password"} />
            <InputText
              type={"password"}
              placeholder="Password..."
              id="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-3">
            <Lable title={"confirm password"} />
            <InputText
              type={"password"}
              placeholder="Re-type password..."
              id="confirm_password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-400 hover:bg-green-500 transition-all select-none py-2 rounded-md text-xl text-white focus:outline-none"
          >
            Sign up
          </button>

          <p className="text-center text-gray-400 mt-5">
            already have an account?
            <Link to="/login" className="text-blue-500">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
