import { register } from "@/lib/action";
import React from "react";

const Register = (formData) => {
  return (
    <div>
      <form action={register}>
        <input type="text" placeholder="username" name="username" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input
          type="password"
          placeholder="password again"
          name="passwordRepeat"
        />
        <button>register</button>
      </form>
    </div>
  );
};

export default Register;
