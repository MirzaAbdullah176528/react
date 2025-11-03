type eduProbs = {time:string  , place:string  , role:string }


export default function Edu( { time , place , role }:eduProbs ){
    return(
        <div className="edu-ele">

            <div className="edu-time">
                <p>{time}</p>
            </div>

            <div className="edu-place">
                <h2>{place}</h2>
                <p>{role}</p>
            </div>

        </div>
    )
}