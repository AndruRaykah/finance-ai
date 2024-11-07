import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
    const { userId } = await auth();
    if (userId) {
        redirect('/')
    }
    return (
        <div className="grid h-full grid-cols-2">
            {/* ESQUERDA */}
            <div className="flex flex-col h-full justify-center p-8 max-w-[550px] mx-auto">
                <Image src="logo.svg" width={173} height={39} alt="Finance AI" className="mb-8"/>
                <h1 className="text-4xl font-bold mb-3">Bem-vindo</h1>
                <p className="text-muted-foreground mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
                <SignInButton>
                    <Button variant="outline">
                        <LogInIcon className="mr-2"/>
                        Fazer login ou criar conta
                    </Button>
                </SignInButton>
            </div>
            



            {/* DIREITA */}
            <div className="relative h-full w-full">
                <Image 
                    src="/login.png" 
                    alt="Faça o login" 
                    fill 
                    className="object-cover"
                />

            </div>
            
        </div>
    );
}
 
export default LoginPage;