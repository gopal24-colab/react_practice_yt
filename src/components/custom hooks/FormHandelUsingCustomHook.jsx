import React from "react";
import useInput from "../hooks/useInput";

const FormHandelUsingCustomHook = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    firstName && lastName && alert(`Welcome to ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Firstname"
          name="firstname"
          {...bindFirstName}
        />
        <input
          type="text"
          placeholder="Lastname"
          name="lastName"
          {...bindLastName}
        />
        <input type="submit" value={`Submit`} />
      </form>
    </div>
  );
};

export default FormHandelUsingCustomHook;
