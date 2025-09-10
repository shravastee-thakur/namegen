import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#202020] flex justify-between px-44 py-5">
      <Link href={"/"}>
        <h1 className="text-4xl font-semibold text-primary">NameGen</h1>
      </Link>
    </div>
  );
};

export default Topbar;
