"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsArrowUpRightCircle } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { FiArrowRight } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const route = usePathname() || "";

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.issue.trim()
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    if (formData.issue.length < 5) {
      toast.error("Please provide a more detailed description of your issue.");
      return;
    }

    toast.success("Your call has been booked!");

    setFormData({ name: "", email: "", phone: "", issue: "" });
    setShowPopup(false);
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    const originalOverflow = document.body.style.overflow;
    if (showPopup || loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showPopup, loading]);

  // Listen for custom event from other components (e.g., Hero) to open booking
  useEffect(() => {
    const handler = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowPopup(true);
      }, 400);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("open-booking", handler as EventListener);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("open-booking", handler as EventListener);
      }
    };
  }, []);

  return (
    <section className="flex justify-between items-center px-4 mx-8">
      <Toaster position="bottom-right" />

      <div className="flex gap-8 items-center z-10">
        <div>
          <Image src="/logo.webp" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex gap-6">
          <Link
            href="/"
            className={`text-blue-900 p-2 mb-2 hover:border-b-2 cursor-pointer ${
              route === "/" ? "border-b-2" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/faqs"
            className={`text-blue-900 p-2 mb-2 hover:border-b-2 cursor-pointer ${
              route === "/faqs" ? "border-b-2" : ""
            }`}
          >
            FAQs
          </Link>
        </div>
      </div>

      <div className="text-blue-900 text-lg cursor-pointer hover:text-blue-700">
        <div className="flex items-center">
          <button
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setShowPopup(true);
              }, 400);
            }}
          >
            Book a call
          </button>
          <BsArrowUpRightCircle className="ml-2" size={24} />
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/10 z-20 pointer-events-auto" />
          <div className="relative pointer-events-auto bg-white p-8 rounded shadow-lg max-w-md w-full z-30">
            <div className="flex flex-row justify-between items-center mb-4">
              <h2 className="text-4xl font-bold mb-4">Book a Call</h2>
              <RxCross1
                className="cursor-pointer absolute top-5 right-5"
                onClick={() => setShowPopup(false)}
              />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <span className="font-semibold">Name*</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jeet Das"
                required
                className="w-full border px-3 py-2 rounded"
              />
              <span className="font-semibold">Email*</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jeet@email.com"
                required
                className="w-full border px-3 py-2 rounded"
              />
              <span className="font-semibold">Phone Number*</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1234567890"
                required
                className="w-full border px-3 py-2 rounded"
              />
              <span className="font-semibold">Issue*</span>
              <textarea
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                placeholder="Briefly describe your issue..."
                rows={3}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex flex-row justify-center gap-4">
                <button
                  className="px-4 py-2 bg-black text-white font-semibold w-full max-w-[350px] rounded-xl flex items-center justify-center gap-2"
                  onClick={handleSubmit}
                >
                  <span>Submit</span>
                  <FiArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-auto" />
          <div className="relative flex items-center justify-center p-6 bg-white rounded-full shadow">
            <div className="w-8 h-8 border-4 border-t-blue-600 border-gray-200 rounded-full animate-spin" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
