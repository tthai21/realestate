import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "@/redux-toolkit/userSlice";

const DialogSignOut = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.email);
  const logOutHandle = () => {
    dispatch(logoutUser());
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="ml-4 px-3 py-1 rounded-md bg-secondary text-white hover:bg-white hover:text-secondary focus:outline-none">
          {user}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-[9999] bg-slate-700 bg-opacity-70 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-[9999] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-secondary m-0 text-[17px] font-bold mb-6 flex justify-center ">
            {user}
          </Dialog.Title>

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button
                className="ml-4 px-3 py-1 rounded-md bg-secondary text-white hover:bg-primary focus:outline-none  w-full "
                onClick={logOutHandle}
              >
                Log out
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

export default DialogSignOut;
