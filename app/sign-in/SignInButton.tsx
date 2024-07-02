"use client";

import { Button } from "@mantine/core";

import { signIn,signOut } from "next-auth/react";

export function SignInButton() {

  return <Button onClick={() => signIn("google")}>Sign in with Google</Button>;

}

export function SignOutButton(){

    return <Button onClick={()=> signOut()}>Sign Out</Button>;

}