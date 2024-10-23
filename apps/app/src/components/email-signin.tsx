"use client";

import { createClient } from "@v1/supabase/client";
import { Button } from "@v1/ui/button";

export function EmailSignin() {
  const supabase = createClient();

  const handleSignin = () => {
    supabase.auth.signInWithPassword({
      email: "user2@yopmail.com",
      password: "user2@yopmail.com",
    });
  };

  return (
    <Button onClick={handleSignin} variant="outline" className="font-mono">
      Sign in with Email
    </Button>
  );
}
