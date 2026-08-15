"use client";

import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  EnvelopeIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {
  contactInterestValues,
  contactTimelineValues,
  type ContactInterest,
  type ContactMessages,
  type ContactTimeline,
} from "@/i18n/messages/contact";

const initialFormData: {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  interest: ContactInterest;
  timeline: ContactTimeline;
  message: string;
} = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  interest: "client-project",
  timeline: "exploring-options",
  message: "",
};

const contactHighlights = [
  {
    id: "focused-discovery",
    icon: LightBulbIcon,
  },
  {
    id: "practical-response",
    icon: ClockIcon,
  },
  {
    id: "production-mindset",
    icon: ShieldCheckIcon,
  },
];
const legacyInterestOptions: Record<string, ContactInterest> = {
  "Client project": "client-project",
  "Expert network": "expert-network",
  "Institutional partnership": "institutional-partnership",
  "Compliance and privacy": "compliance-privacy",
  "Pilot eligibility": "pilot-eligibility",
  "Expert Consultation": "client-project",
  "Market Research": "client-project",
  "Commercial Due Diligence": "client-project",
  "Technical Due Diligence": "client-project",
  "Customer or Channel Research": "client-project",
  "Strategic Research": "client-project",
  "Shopify Store Development": "client-project",
  "AI Consulting": "client-project",
  "Cloud Consulting": "client-project",
  "Platform Engineering": "client-project",
  "API and AI Gateway": "client-project",
  llmxy: "client-project",
  LetScrum: "client-project",
};

export default function ContactForm({ messages }: { messages: ContactMessages }) {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const requestedInterest = new URLSearchParams(window.location.search).get("interest");

    if (requestedInterest && contactInterestValues.includes(requestedInterest as ContactInterest)) {
      setFormData((prev) => ({ ...prev, interest: requestedInterest as ContactInterest }));
    } else if (requestedInterest && legacyInterestOptions[requestedInterest]) {
      setFormData((prev) => ({ ...prev, interest: legacyInterestOptions[requestedInterest] }));
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xpqzzrvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          consentToCommunications: agreed,
          source: "learnmark-contact-page",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData(initialFormData);
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
    <main className="site-section relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(136,19,55,0.18),transparent_66%)]" />

      <div className="site-container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <section className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-8 lg:min-h-160">
          <div>
            <p className="text-sm font-semibold uppercase text-primary-700">{messages.eyebrow}</p>
            <h1 className="mt-5 max-w-xl text-4xl font-bold text-slate-950 sm:text-5xl">
              {messages.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {messages.description}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5">
              {messages.focusAreas.map((area) => (
                <span key={area} className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-center text-xs font-medium text-slate-700 shadow-sm sm:px-3.5 sm:text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 hidden gap-4 lg:grid">
            {contactHighlights.map((item, index) => {
              const localizedItem = messages.highlights[index];
              return (
              <div key={item.id} className="rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-50 text-primary-800 ring-1 ring-primary-100">
                    <item.icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-slate-950">{localizedItem.name}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{localizedItem.description}</p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-700">{messages.formEyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">{messages.formTitle}</h2>
            </div>
            <a href="mailto:hello@learnmark.com" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-800">
              <EnvelopeIcon aria-hidden="true" className="h-4 w-4" />
              hello@learnmark.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-900">
                  {messages.firstName}
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="mt-2 block w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-inset ring-slate-200 transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-slate-900">
                  {messages.lastName}
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="mt-2 block w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-inset ring-slate-200 transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-slate-900">
                  {messages.company}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-inset ring-slate-200 transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                  {messages.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 block w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-inset ring-slate-200 transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold leading-6 text-slate-900">
                  {messages.interest}
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-inset ring-slate-200 transition focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                >
                  {contactInterestValues.map((option) => (
                    <option key={option} value={option}>{messages.interestOptions[option]}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold leading-6 text-slate-900">
                  {messages.timeline}
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-inset ring-slate-200 transition focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                >
                  {contactTimelineValues.map((option) => (
                    <option key={option} value={option}>{messages.timelineOptions[option]}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">
                  {messages.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={messages.messagePlaceholder}
                  className="mt-2 block w-full resize-y rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-inset ring-slate-200 transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="offers" className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50/80 p-4 text-sm leading-6 text-slate-600">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed((prev) => !prev)}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-primary-700 focus:ring-primary-700"
                  />
                  <span>
                    {messages.consentPrefix}{" "}
                    <a href="/privacy-policy" target="_blank" className="font-semibold text-primary-700 hover:text-primary-800">
                      {messages.privacyPolicy}
                    </a>
                    {messages.consentSuffix}
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={!agreed || status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-800 px-6 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/20 transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none sm:w-auto"
              >
                {status === "submitting" ? messages.submitting : messages.submit}
                <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
              </button>
              <p className="text-sm leading-6 text-slate-500">{messages.replyTime}</p>
            </div>

            {status === "success" && (
              <div role="status" className="mt-6 flex gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800">
                <CheckCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none" />
                {messages.success}
              </div>
            )}
            {status === "error" && (
              <div role="alert" className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
                {messages.error}
              </div>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}
