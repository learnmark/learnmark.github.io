/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";

export default function Example() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    interest: "Please Select",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = () => {
    setAgreed(!agreed);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xpqzzrvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          interest: "Please Select",
        });
        setAgreed(false);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="isolate bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center pt-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Talk to Sales
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Ready to discuss an AI or Cloud project with Learnmark?
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company name
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={formData.company}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Work email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="interest"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Why you became interested in Learnmark?
            </label>
            <div className="relative mt-2.5">
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 pl-3.5 pr-9 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              >
                <option disabled>Please Select</option>
                <option>AI Consulting</option>
                <option>Cloud Consulting</option>
                <option>Platform Engineering</option>
                <option>llmxy</option>
                <option>LetScrum</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                checked={agreed}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-primary-700 focus:ring-primary-700"
              />
            </div>
            <label htmlFor="offers" className="text-sm leading-6">
              I agree to receive other communications from Learnmark. You can
              unsubscribe from these communications at any time. For more
              information, please review our{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                className="font-semibold text-primary-700"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={!agreed || status === "submitting"}
            className="disabled:bg-gray-500 block w-full rounded-md bg-primary-800 px-3.5 py-2.5 text-center text-sm font-semibold !text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900 transition-all duration-300"
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </div>
        {status === "success" && (
          <div className="mt-4 p-4 text-sm text-green-700 bg-green-100 rounded-md">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 p-4 text-sm text-red-700 bg-red-100 rounded-md">
            Something went wrong. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
}
