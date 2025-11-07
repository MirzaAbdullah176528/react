import Nav from "../nav/page"
import Progress from "../progress bar/page"
import Edu from "../education/page"


export default function Resume() {
    return(
        <main  className="main-resume" style={{width:'100%', height:'100vh' , display:'flex' ,alignItems:'center' , justifyContent:'center' , flexDirection:'column'  }}>
        
        < Nav />
        
        <div className="main-resume">

            <div className="resume-sec1">
                
                <div className="resume-sec1-sub">

                    <h2 style={{textDecoration:'underline'}}>Programming Languages</h2>
            
                    <div>
                        < Progress value={100} skill="HTML" num={99}/>
                        < Progress value={80} skill="CSS"  num={70} />
                        < Progress value={85} skill="JS"  num={75} />
                        < Progress value={50} skill="React" num={45} />
                        < Progress value={50} skill="TS" num={50} />

                    </div>

                </div>

                <div className="resume-sec1-sub">

                    <h2 style={{textDecoration:'underline'}}>Languages</h2>

                    <div>
                    <Progress value={70} skill="ENG" num={70} />
                    <Progress value={100} skill="Urdu" num={99} />
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