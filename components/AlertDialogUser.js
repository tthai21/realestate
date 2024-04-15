import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const AlertDialogUser = ({ src, id }) => {
  const user = useSelector((state) => state.user.email);
  const router = useRouter();
  const imageClickHandler = () => {
    router.push(`/house/${id}`);
  };
  const signupHandler = () => {
    router.push("/signup");
  };
  return (
    <AlertDialog.Root>
      {!user ? (
        <AlertDialog.Trigger asChild>
          <img
            className="w-[500px] h-[200px] hover:cursor-pointer"
            src={src}
            alt={`House ${id}`}
          />
        </AlertDialog.Trigger>
      ) : (
        <img
          className="w-[500px] h-[200px] hover:cursor-pointer"
          src={src}
          alt={`House ${id}`}
          onClick={imageClickHandler}
        />
      )}

      <AlertDialog.Portal>
        <AlertDialog.Overlay className="z-[9999] bg-slate-700 bg-opacity-70 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className="z-[9999] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Login first
          </AlertDialog.Title>
          <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
            You need to login to see the detail page. If you don't have account
            please sign up!
          </AlertDialog.Description>
          <div className="flex justify-end gap-[25px]">
            <AlertDialog.Cancel asChild>
              <button className="text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className="ml-4 px-3 py-1 rounded-md bg-secondary text-white hover:bg-white hover:text-secondary focus:outline-none"
                onClick={signupHandler}
              >
                Sign Up
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AlertDialogUser;
