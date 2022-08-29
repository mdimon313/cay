import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import { useAuth } from "../context/AuthContext";
function AccountInfo() {
  const navigate = useNavigate();
  // const { currentuser } = useAuth();
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <>
      <section className="flex items-center justify-center h-screen bg-gray-800">
        <div className="container mx-auto">
          <div className="w-1/4 shadow-md p-4 mx-auto bg-gray-50 rounded-md">
            <span
              onClick={() => navigate("/chat")}
              className="cursor-pointer inline-block"
            >
              <FiArrowLeft />
            </span>
            <div className="p-1 relative">
              <img
                src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                alt="profile"
                className="block w-[100px] h-[100px] rounded-full m-auto object-fill"
              />
              <label
                htmlFor="profile"
                className="absolute right-0 bottom-0 cursor-pointer"
              >
                <AiOutlineCamera />
              </label>
              <input
                type="file"
                name="profile"
                id="profile"
                className="hidden"
              />
            </div>
            <h1 className="mt-2 text-xl font-bold text-center">
              {currentUser}
            </h1>
            <small className="text-gray-400 select-none text-center block mt-1">
              Aug-29-2022
            </small>
          </div>
        </div>
      </section>
    </>
  );
}

export default AccountInfo;
