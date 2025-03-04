"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { createConfirmationUInput } from "../menu/actions/create-action";

const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O nome é obrigatório.",
  }),
  email: z.string().email().trim().min(1, {
    message: "O email é obrigatório.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

interface ConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConfirmationDialog = ({
  open,
  onOpenChange,
}: ConfirmationDialogProps) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
    shouldUnregister: true,
  });
  const onSubmit = async (data: FormSchema) => {
    try {
      startTransition(async () => {
        await createConfirmationUInput({
          email: data.email,
          name: data.name,
        });
        onOpenChange(false);
        toast.success("Sua Presença foi confirmada");
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-sky-400 font-bold pb-2">
            Eba! Ficamos felizes em saber que você vem! 🥰🎉
          </DrawerTitle>
          <DrawerDescription className="text-sky-300">
            Antes de confirmar, diz pra gente quem estará junto nesse momento
            lindo! 😊🎁
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome:</FormLabel>
                    <FormControl>
                      <Input placeholder="Escreva seu nome aqui!" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input placeholder="Escreva seu email aqui!" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <DrawerFooter>
                <div className="flex flex-row gap-2 w-full">
                  <Button
                    type="submit"
                    variant="destructive"
                    className="rounded-full w-full relative"
                    disabled={isPending}
                  >
                    {isPending && <Loader2Icon className="animate-spin" />}
                    💙 Confirmado!
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="link" className="rounded-full w-full">
                      ❌ Mudei de ideia!
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ConfirmationDialog;
