'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

type LIprops = { name:string , link:any }

function LI( {name , link }:LIprops ){
  if(name === link){
  return(
    <li><Link className={link} href={link}> {name.toUpperCase()} </Link></li>
  )}
  else{
    return(
      <li><Link className="other" style={{padding:'1rem 1rem'}} href={name}> {name.toUpperCase()} </Link></li>
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
        <LI name='resume' link={location} />
      </ul>

  )
}