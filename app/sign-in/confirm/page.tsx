"use client";
import { Button } from "@mantine/core";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UserInfoAction } from "./UserInfo";

export default function Home() {
  return (
    <SessionProvider>
      <Content />
    </SessionProvider>
  );
}

function Content() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "unauthenticated") {
    router.push("/home");
    return <div>Redirecting...</div>; // This will handle the redirect.
  } else if (status === "authenticated") {
    return (
      <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <UserInfoAction name={session?.user?.name} email={session?.user?.email} image={session?.user?.image} />
        <Button onClick={() => router.push("/home")}>Go to homepage</Button>
        <Button onClick={() => router.push("/profile")}>Go to profile</Button>
      </div>
    );
  }

  // return null; // Handle other cases as needed.
}
