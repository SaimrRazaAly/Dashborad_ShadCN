"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import FirstTimeForm from "@/components/FirstTimeForm";
import type { Metadata } from "next";

// Register Page Component

export const metadata: Metadata = {
  title: "Register",
};
const RegisterPage = () => {
  const router = useRouter();

  // Redirect to dashboard if form is already submitted
  useEffect(() => {
    const isSubmitted = localStorage.getItem("firstTimeFormSubmitted");
    if (isSubmitted) {
      router.replace("/dashboard");
    }
  }, [router]);

  // Handle form submission
  const handleSubmit = (data: any) => {
    // Save form submission flag to localStorage
    localStorage.setItem("firstTimeFormSubmitted", "true");

    // Optionally save form data to the backend here
    // Example: saveUserData(data);

    // Redirect user to the dashboard after successful registration
    router.replace("/dashboard");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-center mt-10 mb-6">
        ️ Register ️‍🔥
      </h1>
      <FirstTimeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterPage;
