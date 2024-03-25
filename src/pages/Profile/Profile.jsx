import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authfirebase from "../../firebase/auth/fireAuth";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useParams();
  const userData = useSelector((state) => state.auth.userImg);

const [users,setUsers] = useState()

  const getProfile = async () => {
    const resp = await authfirebase.getUser(user);
setUsers(...resp)
  };
  
  useEffect(() => {
    getProfile()
  },[]);
  

  return (
    <div>
      <section className="px-2 py-10 md:px-0">
  <div className="mx-auto max-w-4xl">
    <div className="md:flex md:items-center md:justify-center md:space-x-14">
      <div className="relative h-48 w-48 flex-shrink-0">
        <img
          className="relative h-48 w-48 rounded-full object-cover"
          src={userData}
          alt=""
        />
      </div>
      <div className="mt-10 md:mt-0">
        <p className="mt-7 text-lg font-semibold text-black">{users?.name}</p>
        <p className="mt-1 text-base text-gray-600">{users?.email}</p>
      </div>
      <button className="rounded-lg p-2 bg-red-800 text-white">Delete Account</button>
    </div>
  </div>
</section>

    </div>
  );
}

export default Profile;
