import { EmailSignin } from "@/components/email-signin";
import { GoogleSignin } from "@/components/google-signin";
import Image from "next/image";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center size-96">
        <Image src="/logo.png" alt="logo" width={350} height={350} />
        <GoogleSignin />
        <EmailSignin />
      </div>
    </div>
  );
}
