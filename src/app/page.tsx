// app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const isSubmitted = localStorage.getItem("firstTimeFormSubmitted");
    if (isSubmitted) {
      router.replace("/dashboard");
    } else {
      router.replace("/register");
    }
  }, []);

  return null; // or a loading spinner
};

export default Home;
