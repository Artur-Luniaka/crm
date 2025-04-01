"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-inter text-xl">Welcome to CRM</h1>
      <div>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/companies">Companies</Link>
      </div>
    </div>
  );
}
