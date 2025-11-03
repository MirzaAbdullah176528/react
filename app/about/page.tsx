import Nav from "../nav/page";

export default function about() {
    return (
        <main className="main-about">
            <Nav />

            <div className="about">

                <h2>About</h2>

                <p>I am a passionate web developer driven by the pursuit
                of creating clean, scalable, and high-performing 
                digital experiences. My focus lies in building modern,
                responsive websites that merge functionality with 
                elegant design. I specialize in front-end development
                using technologies such as HTML, CSS, JavaScript,
                and React, with a strong commitment to writing 
                structured, maintainable code.</p>

                <p>I believe every project should deliver both
                technical efficiency and an intuitive user
                experience.</p>

            </div>

            <div className="pic">
                    <img className="pic" src="black-circle-svgrepo-com.svg" alt="" />
            </div>
            
        </main>
    )
}