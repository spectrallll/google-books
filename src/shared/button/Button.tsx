import React, { ReactNode } from "react";


interface ButtonProps {
  children: ReactNode;
}
const Button = (props: ButtonProps) => {
  return (
    <button>
      Hello World {props.children}
    </button>
  );
};

export default Button;