'use client';

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

  const locationURL = window.location.href

  const locationArray = locationURL.split('/')

  const location = locationArray.at(-1)
  
  console.log(location);
  

    return(

      <ul className="nav">
        <LI name="home" link={location} />
        <LI name='about' link={location} />
        <LI name='resume' link={location}  />
      </ul>

  )
}