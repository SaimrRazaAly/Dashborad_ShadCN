"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserContext } from "@/providers/User_Data";
import Image from "next/image";

export interface FormData {
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
  const { setUserData, userData } = useUserContext();

  // useEffect(() => {
  //   console.log("userData updated:", userData);
  // }, [userData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        alert("Only JPG, JPEG, and PNG files are allowed.");
        e.target.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prev) => ({
          ...prev,
          imageUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userData);

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 space-y-4 p-6 border rounded-xl shadow bg-background"
    >
      <h2 className="text-xl font-bold mb-4">Complete Your Profile</h2>

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          minLength={8}
          value={userData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          type="text"
          value={userData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="image">Profile Image</Label>
        <Input
          id="image"
          name="image"
          type="file"
          required
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          onChange={handleImageChange}
        />
        {userData.imageUrl && (
          <Image
            src={userData.imageUrl}
            alt="Profile Image Preview"
            width={100}
            height={100}
            className="mt-2 mx-auto object-cover rounded-full"
          />
        )}
      </div>

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
