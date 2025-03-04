"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCircle2Icon } from "lucide-react";


const ThanksYou = () => {
  const goToHome = () => {
    window.location.href = "/miguel";
  };

  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="px-5 py-5 rounded-2xl w-[85%]">
        <AlertDialogHeader>
          <div className="flex w-full h-full items-center justify-center flex-col space-y-2">
            <CheckCircle2Icon className="w-20 h-20 text-sky-400" />
            <AlertDialogTitle>Mimo Confirmado!</AlertDialogTitle>
            <AlertDialogDescription>
              Seu pedido foi realizado com sucesso!
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => goToHome()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ThanksYou;
