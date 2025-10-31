// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Twitter } from "lucide-react";
// function App() {
//   const [fetcheddata, setFetcheddata] = useState(null);
//   const [obj, setObj] = useState({});
//   const userdata = async () => {
//     const response = await fetch(`https://api.github.com/users/${fetcheddata}`);
//     const jsonData = await response.json();
//     console.log(jsonData);
//     setObj(jsonData);
//   }
//   useEffect(() => {
//     userdata();
//    }, [])

//   return (

//     <>
//       { obj.name
//  ? ( <div className='flex flex-col h-[100vh] justify-start items-center p-4 gap-8'>
//       <div className='flex gap-3 h-100% w-full items-center justify-center'>
//         <input type="text" name="search" id=""  className='w-[60vw] rounded-2xl p-4 m-2'placeholder='Enter the github userid' onChange={(e)=>setFetcheddata(e.target.value)} />
//         <button className='bg-black text-white p-4 rounded-2xl ml-2' onClick={userdata}>Search</button>
//       </div>
//       <div className='text-4xl'>GitHub Info Card</div>
//       <img src={obj?.avatar_url}  alt="Profile" className='h-40 w-40 rounded-full bg-pink-500'  />
//       <p className='font-bold text-3xl'>{obj?.name}</p>
//       <div className='grid grid-cols-2 gap-4 text-lg m-4 p-2 '>
//           <div className='flex flex-col gap-2 border-2 border-gray-300 p-4 rounded-lg'>
//             <div className='font-bold text-2xl'>Followers</div>
//             <div className='m-auto text-1xl text-gray-500'>{obj?.followers}</div>
//           </div>
//           <div className='flex flex-col gap-2 border-2 border-gray-300 p-4 rounded-lg'>
//             <div className='font-bold text-2xl'>Following</div>
//             <div className='m-auto text-1xl text-gray-500'>{obj?.following}</div>
//           </div>
//           <div className='flex flex-col gap-2 border-2 border-gray-300 p-4 rounded-lg'>
//             <div className='font-bold text-2xl'>Location</div>
//             <div className='m-auto text-1xl text-gray-500'>{obj?.location}</div>
//           </div>
//           <div className='flex flex-col gap-2 border-2 border-gray-300 p-4 rounded-lg'>
//             <div className='font-bold text-2xl'>Twitter</div>
//             <a href={`https://twitter.com/${obj?.twitter_username}`}
//             target="_blank"  rel="noopener noreferrer" className="m-auto text-gray-500 hover:text-blue-500">
//                <Twitter className="w-6 h-6" />
//             </a>

//           </div>
      
//       </div>
//       </div>) : (
//         <div className='flex flex-col h-[100vh] justify-start items-center p-4 gap-8'>
//         <div className='flex gap-3 h-100% w-full items-center justify-center'>
//           <input type="text" name="search" id=""  className='w-[60vw] rounded-2xl p-4 m-2'placeholder='Enter the github userid' onChange={(e)=>setFetcheddata(e.target.value)} />
//           <button className='bg-black text-white p-4 rounded-2xl ml-2' onClick={userdata}>Search</button>
//         </div>
//         <div className='text-4xl'>GitHub Info Card</div>
//         <p className='text-xl'>Please enter a GitHub username to fetch data.</p>
//         </div>
//       )}
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';
import './App.css';
import { Twitter } from "lucide-react";

function App() {
  const [fetcheddata, setFetcheddata] = useState('');
  const [obj, setObj] = useState({});

  const userdata = async () => {
    if (!fetcheddata.trim()) return;
    const response = await fetch(`https://api.github.com/users/${fetcheddata}`);
    const jsonData = await response.json();
    console.log(jsonData);
    setObj(jsonData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-mono">
      {/* Search Section */}
      <div className="flex gap-3 w-full max-w-2xl items-center justify-center mt-10">
        <input
          type="text"
          className="flex-1 rounded-2xl p-4 border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-[0_0_15px_rgba(255,255,0,0.2)]"
          placeholder=" Enter GitHub username"
          onChange={(e) => setFetcheddata(e.target.value)}
        />
        <button
          className="bg-gradient-to-r from-gray-700 to-black border border-yellow-500 text-yellow-400 px-6 py-3 rounded-2xl shadow-[0_0_20px_rgba(255,255,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,0,0.6)] hover:scale-105 transition-transform"
          onClick={userdata}
        >
          Search
        </button>
      </div>

      {/*  Title */}
      <h1 className="text-5xl font-extrabold text-yellow-400 mt-10 mb-8 tracking-wide drop-shadow-[0_0_10px_#FFD700]">
        GITHUB INFO CARD
      </h1>

      {/*  Display Card */}
      {obj && obj.name ? (
        <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-3xl shadow-[0_0_30px_rgba(255,255,0,0.2)] p-8 w-full max-w-md text-center transition-all hover:shadow-[0_0_45px_rgba(255,255,0,0.5)]">
          <img
            src={obj?.avatar_url}
            alt="Profile"
            className="h-40 w-40 rounded-full mx-auto mb-6 ring-4 ring-yellow-500 shadow-[0_0_20px_rgba(255,255,0,0.4)] hover:scale-105 transition-transform"
          />
          <h2 className="text-3xl font-bold text-yellow-400 mb-2 drop-shadow-[0_0_10px_#FFD700]">{obj?.name}</h2>
          <p className="text-gray-400 italic mb-6">{obj?.bio || "No bio available."}</p>

          <div className="grid grid-cols-2 gap-4 text-lg mb-6">
            <div className="bg-gray-800 p-4 rounded-2xl border border-yellow-700 shadow-inner">
              <div className="font-bold text-yellow-500">Followers</div>
              <div className="text-gray-300">{obj?.followers}</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-2xl border border-yellow-700 shadow-inner">
              <div className="font-bold text-yellow-500">Following</div>
              <div className="text-gray-300">{obj?.following}</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-2xl border border-yellow-700 shadow-inner col-span-2">
              <div className="font-bold text-yellow-500">Location</div>
              <div className="text-gray-300">{obj?.location || "Unknown"}</div>
            </div>
          </div>

          {obj?.twitter_username && (
            <a
              href={`https://twitter.com/${obj?.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-200 transition-colors"
            >
              <Twitter className="w-6 h-6" /> @{obj?.twitter_username}
            </a>
          )}
        </div>
      ) : (
        <p className="text-xl text-gray-400 mt-16 italic tracking-wide">
          “Enter a username to summon the Data.” 
        </p>
      )}
    </div>
  );
}

export default App;
