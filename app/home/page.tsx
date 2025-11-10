import "../style.css"
import Nav from "../nav/page"


function Name() {
  return (
    <div className="details">
      <h2 className="first-name">
        Abdullah
      </h2>
      <h1 className="last-name">
        Hassan
      </h1>
      <p>Web-Developer</p>
      <div className="detail-btn">
        <button><a style={{ textDecoration: 'none', fontSize: '1rem' }} href="resume">Resume</a></button>
        <button><a style={{ textDecoration: 'none', fontSize: '1rem' }} href="resume">Portfolio</a></button>
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <main className="main">
      <div>
        <Nav />
      </div>

      <div>
        <Name />
      </div>

    </main>
  )
}