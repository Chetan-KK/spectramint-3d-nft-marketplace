import React from "react";
import { ModeToggle } from "./ui/mode-toggle";
import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-border px-5 py-3 z-10">
      <MaxWidthWrapper className="flex justify-between items-center">
        <Link href={"/"} className="uppercase font-bold text-xl">
          SpectraMint
        </Link>
        <nav className="flex items-center gap-3">
          <Button>Connect Wallet</Button>
          <ModeToggle />
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
