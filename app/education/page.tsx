type eduProbs = {time:string  , place:string  , role:string }


export default function Edu( { time , place , role }:eduProbs ){
    return(
        <div className="edu-ele">

            <div className="edu-time">
                <p>{time}</p>
            </div>

            <div className="edu-place">
                <h2 className="edu-text">{place}</h2>
                <p className="edu-text">{role}</p>
            </div>

        </div>
    )
}