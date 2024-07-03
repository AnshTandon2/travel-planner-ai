import { parameters } from "../types";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import bg from "../assets/bg-2.png";

interface formData {
  value: (setInput: parameters) => void;
}

function Form(props: formData) {
  const navigate = useNavigate();
  const [slocation, setslocation] = useState("");
  const [elocation, setelocation] = useState("");
  const [duration, setDuration] = useState(0);
  const [budget, setBudget] = useState(0);

  return (
    <div className="h-screen bg-cover flex justify-center" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="fixed left-10 top-10 text-white font-bold text-lg">LV Travel</h1>
      <div className="m-auto align-center backdrop-blur-lg p-10 rounded-lg bg-transparent">
        <h1 className="w-full text-center text-pink-500 font-bold mb-2">Enter Trip Parameters</h1>
        <form className="grid grid-cols-2 gap-2">
          <input onChange={(e) => {setslocation(e.target.value)}} type="text" placeholder="Start Location" 
          className="bg-transparent border-b-2 border-slate-300 rounded-none placeholder:text-white
          focus:outline-none focus:border-pink-500 duration-500" />
          <input onChange={(e) => {setelocation(e.target.value)}} type="text" placeholder="End Location" 
          className="bg-transparent border-b-2 border-slate-300 rounded-none placeholder:text-white
          focus:outline-none focus:border-pink-500 duration-500" />
          <input onChange={(e) => {setDuration(parseFloat(e.target.value))}} type="number" 
          placeholder="Duration (# of days)" className="bg-transparent border-b-2 border-slate-300 rounded-none
          placeholder:text-white focus:outline-none focus:border-pink-500 duration-500" />
          <input onChange={(e) => {setBudget(parseFloat(e.target.value))}} type="number" 
          placeholder="Budget ($)" className="bg-transparent border-b-2 border-slate-300 rounded-none
          placeholder:text-white focus:outline-none focus:border-pink-500 duration-500" />
        </form>
        <button className="mt-4 w-full text-center text-slate-300 rounded-sm border-2 border-slate-300 p-2
        hover:border-pink-500 hover:text-pink-500 duration-500"
          onClick={() => {
            props.value({
              starting_location: slocation,
              ending_location: elocation,
              duration: duration,
              budget: budget
            })
            navigate("/list"); 
          }}
        >
          See Results
        </button>
      </div>
    </div> 
  );
}

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       message: "",
//     };
//   }
// }

//With html forms you need to prevent default behavior of reloading

export default Form;
