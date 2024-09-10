import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Restaurante Cadastrado com Sucesso!",{
        action: {
          label: "login",
          onClick: () => navigate("/sign-in"),
        },
      })
  }
  return (
    <>
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="justity-center flex w-[350px] flex-col gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar Conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName"> Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName"> Seu Nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email"> Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone"> Seu Celular</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>
            <Button className="w-full" disabled={isSubmitting}>
              Finalizar Cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Aao continuar você concorda com nossos termos de serviço e
              políticas de privacidade.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
