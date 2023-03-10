import React, { useState } from "react";

const HookCountObject = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <h1>User first name is {user.firstName}</h1>
      <h1>User last name is {user.lastName}</h1>
      <h1>{JSON.stringify(user)}</h1>
    </div>
  );
};

export default HookCountObject;
