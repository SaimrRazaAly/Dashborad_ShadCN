"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
interface FormData {
  name: string;
  email: string;
  password: string;
  address: string;
  imageUrl: string | undefined;
}

export default function SimpleForm({
  onSubmit,
}: {
  onSubmit: (data: FormData) => void;
}) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    address: "",
    imageUrl: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          imageUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Pass form data when submitting
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 space-y-4 p-6 border rounded-xl shadow bg-background"
    >
      <h2 className="text-xl font-bold mb-4">Complete Your Profile</h2>

      <div>
        <Label htmlFor="name" className="mb-2">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="email" className="mb-2">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="password" className="mb-2">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          minLength={8}
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="address" className="mb-2">
          address
        </Label>
        <Input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      {/* Image Upload */}
      <div>
        <Label htmlFor="image" className="mb-2">
          Profile Image
        </Label>
        <Input
          id="image"
          name="image"
          type="file"
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          required
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
              if (!allowedTypes.includes(file.type)) {
                alert("Only JPG, JPEG, and PNG files are allowed.");
                e.target.value = ""; // Reset input
                return;
              }

              const reader = new FileReader();
              reader.onloadend = () => {
                setFormData((prev) => ({
                  ...prev,
                  imageUrl: reader.result as string,
                }));
              };
              reader.readAsDataURL(file);
            }
          }}
        />

        {/* {formData.imageUrl && (
          <Image
            src={formData.imageUrl}
            alt="Profile Image Preview"
            width={100}
            height={100}
            className="mt-2 mx-auto object-cover rounded-full"
          />
        )} */}
      </div>

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
