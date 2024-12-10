import React from "react";
import { useEffect , useState} from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
  const data=useLoaderData()
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/rohit08sen')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data);
  //     setData(data)
  //   })
  // },[])
  return(
    <div className="m-4 text-center bg-gray-600 text-white p-4 text-3xl">Github Followers:{data.followers} 
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubLoader= async () =>{
  const response= await fetch('https://api.github.com/users/rohit08sen')
  return response.json()
}