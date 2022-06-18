import { Link } from "react-router-dom";

function Home() {
  return(
    <>
      <nav id="topics-container">
        <Link className="topic" to="/html">HTML</Link>
        <Link className="topic" to="/css">CSS</Link>
        <Link className="topic" to="/javascript">JavaScript</Link>
        <Link className="topic" to="/react">React</Link>
      </nav>
    </>
  )
}

export default Home;