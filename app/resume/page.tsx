import Nav from "../nav/page"
import Progress from "../progress bar/page"
import Edu from "../education/page"



export default function Resume() {

        function skills(){
            const names = {
            HTML:"10/10",
            CSS:'08/10',
            JS:"07/10",
            React:"04/10",
            TS:'05/10'
            }
            return(
            <>
            {Object.entries(names).map(([sName , value ]) => (
            <Progress skill={sName} value={parseInt(value)*10} num={value}/>
            ))}
            </>
            )
        }
    return(
        <main  className="main-resume" style={{width:'100%', height:'100vh' , display:'flex' ,alignItems:'center' , justifyContent:'center' , flexDirection:'column'  }}>
        
        < Nav />
        
        <div className="main-resume">

            <div className="resume-sec1">
                
                <div className="resume-sec1-sub">

                    <h2 style={{textDecoration:'underline'}}>Programming Languages</h2>
            
                    <div>
                        {skills()}
                    </div>

                </div>

                <div className="resume-sec1-sub">

                    <h2 style={{textDecoration:'underline'}}>Languages</h2>

                    <div>
                    <Progress value={70} skill="ENG" num="07/10" />
                    <Progress value={100} skill="Urdu" num="10/10" />
                    </div>

                </div>

            </div>


            <div className="edu">

                <h2 style={{textDecoration:'underline'}}>Education</h2>
                <div className="edu-on-page">
                
                < Edu time='Present' place='Whites Technology' role='Web-Developer (Internship)' />
                < Edu time='2024-Pr' place='Concordia Collage F.S.D' role='Intermidiate Student' />
                < Edu time='2022-2023' place='Govt. Cresient School' role='Marticulation Student' />
                

                </div>

            </div>

        </div>
        </main>
    )
}