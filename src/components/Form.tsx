import React from "react";
import { FormProps } from "../types";

interface MyForm {
  value: (setInput: FormProps) => void;
}

function Form(props: MyForm) {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Message:
        <input type="text" name="message" />
      </label>
      <button
        type="button" // type to prevent automatic reload
        onClick={() => {
          //pass prop values into llm here?
          props.value({
            name: "",
            email: "",
            message: "",
          });

          console.log("form submitted");
        }}
      >
        Submit
      </button>
    </form>
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
