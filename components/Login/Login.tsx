import React from "react";
import ImageWrapper from "@components/ImageWrapper";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <div className="md:w-1/2">
        <ImageWrapper
          src="/assets/images/signup.png"
          alt="signup-image"
          fallbackSrc="https://via.placeholder.com/500"
          className="rounded-lg h-auto md:h-full"
          width={800}
          height={800}
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center p-4 max-w-lg">
        <h1 className="text-4xl font-bold mb-6">Login</h1>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 bg-gray-100 rounded-lg w-full focus:outline-brand-accent focus:bg-white"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              placeholder="Password"
              className="p-3 bg-gray-100 rounded-lg w-full focus:outline-brand-accent focus:bg-white"
            />
          </div>
          <p className="text-blue-500 hover:underline mb-2 cursor-pointer">
            Forgot password?
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300 ease-in-out">
            Login
          </button>
          <p className="mt-4">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
