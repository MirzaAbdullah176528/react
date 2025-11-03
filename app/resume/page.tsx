import { Html } from "next/document"
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
                <h2>Programming Languages</h2>
            
                <div>
                    < Progress value={100} skill="HTML" />
                    < Progress value={80} skill="CSS"  />
                    < Progress value={85} skill="JS"   />
                    < Progress value={50} skill="React"/>
                    < Progress value={50} skill="TypeScript" />

                </div>
                </div>

                <div className="resume-sec1-sub">

                    <h2>Languages</h2>

                    <div>
                    <Progress value={70} skill="English" />
                    <Progress value={100} skill="Urdu" />
                    </div>

                </div>

            </div>


            <div className="edu">

                <h2>Education</h2>
                <div className="edu-on-page">
                
                < Edu time='2022-2023' place='Govt. Cresient Higher secondary School' role='Marticulation Student' />
                 < Edu time='2024-Present' place='Concordia Collage F.S.D' role='Intermidiate Student' />
                 < Edu time='Present' place='Whites Technology' role='Web-Developer (Internship)' />

                </div>

            </div>

            <div>

            </div>
        </div>
        </main>
    )
}