import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <div className="p-3">
      <h1 className="font-bold text-center text-xl">Website</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Page: Home</h1>
      <Link className="text-blue-500" to="/register">
        Go to Register
      </Link>
    </div>
  );
};

const Register = () => {
  const [password, setPassword] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<
    null | "strong" | "average" | "weak"
  >(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsValidating(true);

    const { default: zxcvbn } = await import("zxcvbn");
    let response = zxcvbn(password);

    if (response.score === 0 || response.score === 1) {
      setPasswordStrength("weak");
    } else if (response.score === 2) {
      setPasswordStrength("average");
    } else if (response.score === 3 || response.score === 4) {
      setPasswordStrength("strong");
    }

    setIsValidating(false);
  };

  return (
    <div>
      <h1>Register</h1>
      <Link className="text-blue-500" to="/">
        Go to Home
      </Link>

      <hr className="my-3" />

      <form className="space-y-2" onSubmit={onSubmit}>
        <p>Type a password to check its strength</p>

        {/* Password Strength Alert */}
        {passwordStrength === "strong" && (
          <p className="text-green-500">Your password is strong!</p>
        )}
        {passwordStrength === "average" && (
          <p className="text-yellow-500">Your password is average</p>
        )}
        {passwordStrength === "weak" && (
          <p className="text-red-500">Your password is weak!</p>
        )}

        <input
          className="border-2"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          disabled={isValidating}
          className="rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400 p-2 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500"
        >
          {isValidating ? "Loading" : "Validate"}
        </button>
      </form>
    </div>
  );
};
