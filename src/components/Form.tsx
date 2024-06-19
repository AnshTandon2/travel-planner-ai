import React from "react";
import { FormProps } from "../types";

interface MyForm {
  value: MyForm;
  // name: MyForm;
  // email: MyForm;
  // message: MyForm;

  // name: MyForm["name"],
  // email: MyForm["email"],
  // message:
}

function Form(props: FormProps) {
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
      <button type="submit">Submit</button>
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
