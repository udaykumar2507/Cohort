import React from 'react';
import profilePic from '../images/profile.jpg';

const Profile = ({ name, city, age, followers, likes, photos }) => {
  return (
    <div>
      <div className="bg-blue-500 h-[40vh]"></div>

      <div className="-mt-20">
        <img
          className="w-40 h-40 rounded-full object-cover m-auto border-4 border-white shadow-lg"
          src={profilePic}
          alt="Profile"
        />
      </div>

      <div className="flex flex-col w-full min-h-[200px] justify-center items-center gap-4">
        <div className="flex gap-2">
          <p className="text-3xl font-semibold">{name}</p>
          <p className="text-3xl text-gray-400">{age}</p>
        </div>
        <p className="text-2xl text-gray-400">{city}</p>
      </div>

      <hr className="border-t-2 border-blue-500 w-full m-auto" />

      <div className="flex justify-around items-center w-full min-h-[150px] text-center pt-6 gap-4">
        <div className="flex flex-col text-2xl gap-2">
          <p className="font-bold text-3xl">{followers}K</p>
          <p className="text-gray-400">Followers</p>
        </div>
        <div className="flex flex-col text-2xl gap-2">
          <p className="font-bold text-3xl">{likes}K</p>
          <p className="text-gray-400">Likes</p>
        </div>
        <div className="flex flex-col text-2xl gap-2">
          <p className="font-bold text-3xl">{photos}K</p>
          <p className="text-gray-400">Photos</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
