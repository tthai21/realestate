import axios from "@/ulti/axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [formData, setFormData] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, values) => {
    e.preventDefault();
    const REGISTER_URL = "api/auth/register";
    try {
      const response = await axios.post(REGISTER_URL, (values = formData));
      alert(
        `New account has been created ! Welcomes ${response?.data.username} `
      );
      router.push("/");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 403) {
          alert(
            "Email or Password Invalid. Please refresh your browser and try again."
          );
        } else {
          alert(error.response.data.message);
        }
      } else if (error.request) {
        alert(
          "Email or Password Invalid. Please refresh your browser and try again"
        );
      } else {
        alert(
          "An error occurred while setting up the request. Please refresh your browser and try again"
        );
      }
    }
  };

  return (
    <div className=" mx-auto py-6 mb-[200px]   mt-[100px] rounded-lg">
      <h1 className="text-3xl font-bold mb-8 flex items-center justify-center  text-secondary ">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            className="mt-1 block w-full bg-slate-100 border-gray-700 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-700 bg-slate-100 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="mt-1 block w-full bg-slate-100 border-gray-700 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
          />
        </div>
        <div className="mb-14">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <select
            id="state"
            name="state"
            onChange={handleChange}
            className="mt-1 block w-full bg-slate-100 border-gray-700 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
          >
            <option value="">Select a state</option>
            <option value="VIC">VIC</option>
            <option value="NSW">NSW</option>
            <option value="QLD">QLD</option>
            <option value="TAS">TAS</option>
            <option value="SA">SA</option>
            <option value="NT">NT</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
