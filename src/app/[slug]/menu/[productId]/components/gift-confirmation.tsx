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
import { createGift } from "../../actions/create-action";
import { useContext, useTransition } from "react";
import { CardContext } from "../../contexts/cards";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O nome é obrigatório.",
  }),
  email: z.string().email().trim().min(1, {
    message: "O email é obrigatório.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

interface GiftConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GiftConfirmationDialog = ({
  open,
  onOpenChange,
}: GiftConfirmationDialogProps) => {
  const { products } = useContext(CardContext);
  const [isPending, startTransition] = useTransition();
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter(); // Adicione essa linha

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
        await createGift({
          email: data.email,
          name: data.name,
          products,
          slug,
        });
        onOpenChange(false);
        toast.success("Mimo confirmado com sucesso!");
        router.push(`/${slug}/menu/thanks`);
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
          <DrawerTitle>Quase lá!</DrawerTitle>
          <DrawerDescription>
            Antes de confirmar, queremos saber quem vai compartilhar esse
            carinho com a gente! 😊💙
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
                    className="rounded-full w-full"
                    disabled={isPending}
                  >
                    {isPending && <Loader2Icon className="animate-spin" />}
                    Finalizar
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline" className="rounded-full w-full">
                      Cancelar
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

export default GiftConfirmationDialog;
