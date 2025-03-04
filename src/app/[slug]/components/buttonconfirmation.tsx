"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ConfirmationDialog from "./confirmation";

const ButtonConfirmation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className="rounded-full" onClick={() => setIsOpen(true)}>
        Confirmar Sua Presença
      </Button>
      <ConfirmationDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default ButtonConfirmation;
