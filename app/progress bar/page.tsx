type ProgressProps = {value:number , skill:string;}


export default function Progress({ value , skill}: ProgressProps ){
    return(
        <div className="main-progress">
            <h1>{skill}</h1>
            <div className="progress-bar">
                <div className="progress-fill" style={{width:`${value}%`}}>
                    <span className="circle"></span>
                </div>
            </div>
        </div>
    )
}
