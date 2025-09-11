"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import QueryDialog from "./QueryDialog";
import { useQueryContext } from "@/context/BusinessNameContext";

const Search = () => {
  const [keyword, setKeyword] = useState();
  const [queryDialog, setQueryDialog] = useState(false);
  const { query, updateQuery } = useQueryContext();

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const showQueryDialog = () => {
    if (!keyword) {
      alert("Keyword required!");
    }

    updateQuery({ keyword });
    setQueryDialog(!queryDialog);
  };
  return (
    <div className="flex justify-center items-center pt-5">
      <div className="w-[500px] flex items-center gap-2">
        <Input
          onChange={handleKeyword}
          placeholder="Enter keyword..."
          className="h-12 text-white md:text-base border-primary"
        />
        <Button onClick={showQueryDialog} className="h-12 text-lg px-5">
          Generate
        </Button>
      </div>
      <QueryDialog
        queryDialog={queryDialog}
        setQueryDialog={setQueryDialog}
        keyword={keyword}
      />
    </div>
  );
};

export default Search;
