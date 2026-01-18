"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-6 w-6 text-primary" />
        </div>

        <h1 className="text-xl font-semibold">Submitted</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Your message has been received.
        </p>

        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
        >
          Submit another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border bg-card p-8 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h1 className="text-2xl font-semibold mb-2">Contact</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Pilot deployments, partnerships, research, or press.
      </p>

      <div className="space-y-4">
        <Field label="Name">
          <input
            required
            placeholder="Your name"
            className="h-11 w-full rounded-xl border bg-background px-3 text-sm"
          />
        </Field>

        <Field label="Email">
          <input
            required
            type="email"
            placeholder="you@company.com"
            className="h-11 w-full rounded-xl border bg-background px-3 text-sm"
          />
        </Field>

        <Field label="Inquiry">
          <select className="h-11 w-full rounded-xl border bg-background px-3 text-sm">
            <option>Pilot / Deployment</option>
            <option>Partnership</option>
            <option>Research</option>
            <option>Press</option>
            <option>Other</option>
          </select>
        </Field>

        <Field label="Message">
          <textarea
            required
            placeholder="Write your message…"
            className="min-h-[140px] w-full rounded-xl border bg-background px-3 py-2 text-sm"
          />
        </Field>

        <button
          type="submit"
          className="mt-4 h-11 w-full rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
        >
          Send
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1">
      <span className="text-xs font-medium text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
