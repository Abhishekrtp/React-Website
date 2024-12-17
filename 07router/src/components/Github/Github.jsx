import React, { useEffect, useState } from "react";


function Github() {

  const [data, setData] = useState([])
  useEffect(() => {
   fetch('https://api.github.com/users/abhishekrtp')
   .then(response => response.json())
   .then(data => {
      console.log(data);
      setData(data)
   })
  }, [])

  return (
    <div className=" flex flex-col justify-center items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      Github followers: {data.followers}
      <img className="m-4 rounded-xl" src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/abhishekrtp");
  return response.json();
};

