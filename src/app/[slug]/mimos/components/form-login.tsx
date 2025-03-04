"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email().trim().min(1, {
    message: "O email é obrigatório.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;
const FormLogin = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const pathName = usePathname();
  const router = useRouter();
  const onSubmit = (data: FormSchema) => {
    router.push(`${pathName}?email=${data.email}`);
  };
  const handleCancel = () => {
    router.back();
  };
  return (
    <Drawer open>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-sky-500 font-bold text-lg">
            🎁 Veja os mimos que <br />
            você escolheu! 🎁
          </DrawerTitle>
          <DrawerDescription className="text-muted-foreground">
            Confirme seu e-mail para acessar a lista dos presentes que você
            reservou para o chá de bebê do Miguel! 💙✨
          </DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="px-5">
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="Escreva seu email aqui!" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <DrawerFooter>
              <Button
                type="submit"
                variant="destructive"
                className="w-full rounded-xl"
              >
                Confirmar
              </Button>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="w-full rounded-xl"
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
};

export default FormLogin;
