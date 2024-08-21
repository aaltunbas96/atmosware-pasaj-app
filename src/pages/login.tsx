import LoginBody from "@/components/login/LoginBody";
import LoginFooter from "@/components/login/LoginFooter";
import LoginHeader from "@/components/login/LoginHeader";
import React from "react";

export default function login() {
  return (
    <>
      <LoginHeader />
      <main>
        <LoginBody />
      </main>
      <LoginFooter />
    </>
  );
}
