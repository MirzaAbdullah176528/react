type ProgressProps = {value:number , skill:string;}


export default function Progress({ value , skill}: ProgressProps ){
    return(
        <div className="main-progress">
            <h1 style={{color:'#8FABD4', 
                        border:'1px solid #8FABD4',
                        width:'25%',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center', 
                        padding:'0.2rem',
                        borderRadius:'0.5rem'}}>{skill}</h1>

            <div className="progress-bar">
                <div className="progress-fill" style={{width:`${value}%`}}>
                    <span className="circle"></span>
                </div>
            </div>
        </div>
    )
}
