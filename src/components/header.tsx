import React from "react";
import { ModeToggle } from "./ui/mode-toggle";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-5 flex justify-between items-center">
      <div>SpectraMint</div>
      <ModeToggle />
    </header>
  );
};

export default Header;
