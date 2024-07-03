import { useEffect, useRef } from "react";
import { outputs } from "../types";
import xbar from "../assets/x-solid.svg";

interface userProps {
  value: outputs;
}

function Itinerary(props: userProps) {
  const dialog = useRef(null);

  const open = () => {
    const ref = dialog.current as unknown as HTMLDialogElement;
    ref.style.visibility = "visible";
    ref.showModal();
  }

  const close = () => {
    const ref = dialog.current as unknown as HTMLDialogElement;
    ref.style.visibility = "hidden";
    ref.close();
  }

  useEffect(() => {
    close();
  }, [])

  return(
    <>
      <dialog className="rounded-lg grid col-1 p-2 outline-none" ref={dialog}>
        <div>
          <img src={xbar} onClick={() => close()} className="float-right w-5, h-5" />
        </div>
        <h1 className="font-bold">{props.value.title}</h1>
        <p>{props.value.subtitle}</p>
        <br />
        <ul>
          {
            props.value.locations.map((value, index) => {
              return <li>
                <h2 className="font-bold">{value}</h2>
                <p>{props.value.descriptions[index]}</p>
                <p>Cost: ${props.value.costs[index]}</p>
                <p>Time: {props.value.times[index]}hrs</p>
              </li>
            })
          }
        </ul>
      </dialog>
      <div onClick={() => open()} className="rounded-lg shadow-lg hover:shadow-none hover:border duration-500 p-4
      text-center font-bold text-2xl hover:border-pink-500 aspect-square flex justify-center items-center bg-cover"
      >
        <h1 className="align-middle">{props.value.title}</h1>
      </div> 
    </>
  );
}

export default Itinerary;