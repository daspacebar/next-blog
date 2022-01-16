import Layout from "../components/Layout";
import 'boxicons/css/boxicons.min.css'

function index() {
  return (
    <Layout>
      <div className="font-sans tracking-wide font-medium text-5xl text-center my-20">
        <h1>✨Niket Kumar✨</h1>
      </div>
      <div className="text-black-500 -mt-10 text-center">
        <p>
          I imagine a lot of things and try to build most of them through code. Sometimes it works, sometimes it doesn't, after all what's the fun if there are no bugs? 💖
        </p>
      </div>
      <div className="mt-10 place-items-center flex flex-row justify-center space-x-4 ">
        <a href="mailto:niket123kumar@gmail.com">
          <i class='bx bx-mail-send bx-md bx-tada-hover'></i>
        </a>
        <a href="https://twitter.com/daspacebar6">
          <i class='bx bxl-twitter bx-md bx-tada-hover'></i>
        </a>
        <a href="https://github.com/daspacebar">
          <i class='bx bxl-github bx-md bx-tada-hover'></i>
        </a>
        <a href="https://linkedin.com/in/daspacebar">
          <i class='bx bxl-linkedin bx-md bx-tada-hover'></i>
        </a> 
      </div>
    </Layout>
  )
}

export default index

