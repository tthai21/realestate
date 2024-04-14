import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import axios from "@/ulti/axios";
import { setUser } from "@/redux-toolkit/userSlice";

const DialogSignIn = () => {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    const LOGIN_URL = "api/auth/login";
    try {
      const response = await axios.post(LOGIN_URL, (values = formData));
      const { email, username } = await response.data;
      dispatch(setUser({ name: username, email: email }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-sm sm:text-base sm:px-3 ml-4 px-0 py-1 rounded-md bg-secondary text-white hover:bg-white hover:text-secondary focus:outline-none">
          Sign In
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-700 bg-opacity-70 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-secondary m-0 text-[17px] font-bold mb-6 flex justify-center ">
            Sign In
          </Dialog.Title>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-violet11 w-[90px] text-right text-[15px]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:outline-none text-violet11 shadow-violet7  inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-violet11 w-[90px] text-right text-[15px]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:outline-none text-violet11 shadow-violet7  inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="password"
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </fieldset>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal flex text-center justify-center">
            Don't have account?{"  "}
            <Dialog.Close asChild>
              <Link href="/signup" className="underline">
                {" "}
                Sign up here
              </Link>
            </Dialog.Close>
          </Dialog.Description>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button
                className="ml-4 px-3 py-1 rounded-md bg-secondary text-white hover:bg-primary focus:outline-none"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogSignIn;
