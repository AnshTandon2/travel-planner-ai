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
        type="submit"
        onClick={() =>
          props.value({
            name: "",
            email: "",
            message: "",
          })
        }
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

export default Form;
