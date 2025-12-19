
const page = async() => {
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:3000/api/user', {
      cache: 'no-store' // Disable caching to always fetch fresh data
    });
    const userData = await res.json();
    return userData;
  };

  const data = await fetchUserData();

  return (
     console.log(data),
    <div>
      {data.name}
      <br />  
      {data.email}
    </div>
  )
}

export default page
