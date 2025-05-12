"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SimpleForm, { FormData } from "@/components/FirstTimeForm";

// Register Page Component
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
  const handleSubmit = () => {
    // Store the form submission flag in localStorage
    localStorage.setItem("firstTimeFormSubmitted", "true");
    // console.log("Form Data Submitted:", formData);

    // Redirect to the dashboard
    router.replace("/dashboard");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-center mt-10 mb-6">
        Register ️‍🔥
      </h1>
      <SimpleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterPage;
