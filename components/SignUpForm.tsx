"use client";

import { useState } from "react";
import { Form, Input, Button, addToast } from "@heroui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpForm() {
  interface SubmittedData {
    username: string;
    email: string;
    password: string;
  }

  interface Errors {
    [key: string]: string;
  }

  const router = useRouter();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getPasswordError = (value: string) => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    return null;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: SubmittedData = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    const newErrors: Errors = {};

    if (!data.username) {
      newErrors.username = "Please enter your username";
    }

    if (!data.email) {
      newErrors.email = "Please enter your email";
    }
    if (!data.password) {
      newErrors.password = "Please enter your password";
    } else if (getPasswordError(data.password)) {
      newErrors.password = getPasswordError(data.password)!;
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post("/api/auth/signup", data);
        console.log("Sign-up successful:", response.data);
        if (response.status === 201 || response.status === 200) {
          addToast({
            title: "Success Signup",
            description: "Signed up successfully!",
            variant: "flat",
            color: "success",
          });
          sessionStorage.setItem("user", JSON.stringify(response.data.user));
          router.push("/");
        } else if (response.status === 409) {
          addToast({
            title: "Error",
            description: response.data.message || "User already exists",
            variant: "flat",
            color: "danger",
          });
        } else {
          addToast({
            title: "Error",
            description: response.data.message || "Sign-in failed",
            variant: "flat",
            color: "danger",
          });
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.includes("409")) {
            addToast({
              title: "Error",
              description: "User already exists",
              variant: "flat",
              color: "danger",
            });
          } else {
            addToast({
              title: "Error",
              description: error.message || "Sign-up failed",
              variant: "flat",
              color: "danger",
            });
          }
        }
        console.error("Sign-up failed:", error);
      } finally {
        setUsername("");
        setEmail("");
        setPassword("");
        setErrors({});
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="text-center mx-auto">
      <h1 className="font-bold text-blue-500 text-2xl text-center mb-2">
        Sign Up to Medence Legal
      </h1>
      <Form
        className="w-full justify-center items-center space-y-4"
        validationErrors={errors}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4 max-w-md">
          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter your username";
              }
            }}
            label="Username"
            labelPlacement="outside"
            name="username"
            placeholder="Enter your username"
            type="text"
            value={username}
            onValueChange={setUsername}
          />

          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter your email";
              }
              if (validationDetails.typeMismatch) {
                return "Please enter a valid email address";
              }
            }}
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onValueChange={setEmail}
          />

          <Input
            isRequired
            errorMessage={getPasswordError(password)}
            isInvalid={getPasswordError(password) !== null}
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onValueChange={setPassword}
          />

          <div className="flex gap-4">
            <Button
              className="w-full"
              color="primary"
              type="submit"
              isLoading={isSubmitting}
            >
              Submit
            </Button>
            <Button type="reset" variant="bordered">
              Reset
            </Button>
          </div>
          <span>
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-500">
              Sign in
            </Link>
          </span>
        </div>
      </Form>
    </div>
  );
}
