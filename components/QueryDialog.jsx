import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const QueryDialog = ({ queryDialog, setQueryDialog, keyword }) => {
  return (
    <Dialog open={queryDialog} onOpenChange={setQueryDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default QueryDialog;
