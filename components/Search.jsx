"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Search = () => {
  const [keyword, setKeyword] = useState();

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const showQueryModal = () => {
    if (!keyword) {
      alert("Keyword required!");
    }
  };
  return (
    <div className="flex justify-center items-center pt-5">
      <div className="w-[500px] flex items-center gap-2">
        <Input
          onChange={handleKeyword}
          placeholder="Enter keyword..."
          className="h-12 text-white md:text-base border-primary"
        />
        <Button onClick={showQueryModal} className="h-12 text-lg px-5">
          Generate
        </Button>
      </div>
    </div>
  );
};

export default Search;
