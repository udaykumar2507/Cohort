import Image from "next/image";
import axios from "axios";


async function  getUserDetail(){
  await new Promise(resolve => setTimeout(resolve, 5000));
  const response = await axios.get("http://localhost:3000/api/user/");
  return response.data;
}

export default async function Home() {
  const userDetail = await getUserDetail();
  return (
     <div className="h-screen flex justify-center items-center">
      <div className="border-2 p-2 flex flex-col gap-4 justify-center">
       <p> {userDetail.name}</p>
       <p>{userDetail.email}</p>
        </div>      
     </div>
  );
}
