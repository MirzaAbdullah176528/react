'use client';

import { useEffect, useState } from "react";

type LIprops = { name:any , link:any }

function LI( {name , link }:LIprops ){

  if(name === link){
  return(

    <li><a className={link} href={link}> {name} </a></li>

  )
  }
  else{
    return(
      <li><a href={name}> {name} </a></li>
    )
  }
}

export default function Nav(){

  const [location , setLocation] = useState('')

  useEffect(()=>{
    const url = window.location.href
    const array = url.split('/')
    const cur :any = array.at(-1)

    setLocation(cur);
  } ,[])

  
  console.log(location);
  

    return(

      <ul className="nav">
        <LI name="home" link={location} />
        <LI name='about' link={location} />
        <LI name='resume' link={location}  />
      </ul>

  )
}