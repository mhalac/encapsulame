"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface GotoDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GotoDashboard({ className, children }: GotoDashboardProps) {
  const router = useRouter();

  function gotodash() {
    router.push("/dashboard");
  }

  return (
    <button onClick={gotodash} className={className}>
      {children}
    </button>
  );
}
