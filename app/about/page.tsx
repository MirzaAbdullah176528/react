import Nav from "../nav/page";

export default function about() {
    return (
        <main className="main-about">
            <Nav />

            <div className="about-sec">


                <div className="about_">

                <div>
                    <h5>Hi! I'm</h5>
                    <p>Web developer</p>
                </div>

                    <p>I am a passionate web developer driven by the pursuit
                    of creating clean, scalable, and high-performing 
                    digital experiences. My focus lies in building modern,
                    responsive websites that merge functionality with 
                    elegant design. I specialize in front-end development
                    using technologies such as HTML, CSS, JavaScript,
                    and React, with a strong commitment to writing 
                    structured, maintainable code.</p>

                    <div style={{padding:'0rem', margin:'1rem 0rem 0rem 0rem'  }} className="detail-btn">
                        <button><a style={{ textDecoration: 'none', fontSize: '1rem', }} href="resume">Resume</a></button>
                    </div>

                </div>


                <div className="profile">
                    <img src="avatar.svg" alt="" />
                </div>

            </div>     
        </main>
    )
}