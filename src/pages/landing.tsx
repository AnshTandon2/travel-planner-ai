import { url } from "inspector";
import bg from "../assets/bg-1.gif";

function Landing() {

  return(
    <div className="h-screen bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <div className="text-white left-40 top-40 fixed p-8 backdrop-blur-sm rounded-sm grid grid-cols-1">
        <h1 className="text-5xl border-b-2 border-pink-500 font-bold">Travel.ai</h1>
        <p>Explore travel ideas with a click of a button</p>
        <button
        className="box-border p-4 rounded border-4 mt-4 w-full border-pink-500 text-lg font-bold hover:bg-pink-500
        duration-500 self-center">Lets Go!</button>
      </div>
    </div>
  );
}

export default Landing;