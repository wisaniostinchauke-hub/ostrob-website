"use client";

import { useState, FormEvent } from "react";
import TitleBlock from "./TitleBlock";
import { site, telLink, mailtoLink, whatsappLink } from "@/lib/site";

/**
 * Submits to Netlify Forms.
 *
 * Netlify detects forms from static HTML at build time, which Next.js app-router
 * pages don't reliably produce. The documented workaround is a plain HTML file in
 * /public that declares the fields — see public/__forms.html — and posting to it.
 * No server, no API key, and submissions land in your Netlify dashboard with
 * email notifications you can switch on under Forms → Settings.
 */
const FORM_NAME = "project-intake";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    if (message.length < 10) next.message = "Please tell us a little more — at least a sentence.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      // Move focus to the first field with a problem for screen-reader users.
      const firstKey = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    // Honeypot: silently accept bot submissions without sending anything.
    if (String(data.get("bot-field") ?? "")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    data.set("form-name", FORM_NAME);

    const params = new URLSearchParams();
    data.forEach((value, key) => {
      if (typeof value === "string") params.append(key, value);
    });

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <div className="mono-label mb-3 text-[11px] text-[var(--rust)]">
              Project Intake
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight md:text-5xl">
              Tell us what you&rsquo;re building.
            </h2>
            <p className="mt-5 max-w-sm text-[var(--ink)]/65">
              Fill in the sheet and we&rsquo;ll reply the same working day with next
              steps — usually a short discovery call.
            </p>

            <div className="mt-10 space-y-3 text-sm">
              <a
                href={mailtoLink}
                className="block text-[var(--ink)]/75 transition-colors hover:text-[var(--rust)]"
              >
                {site.email}
              </a>
              <a
                href={telLink}
                className="block text-[var(--ink)]/75 transition-colors hover:text-[var(--rust)]"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[var(--ink)]/75 transition-colors hover:text-[var(--rust)]"
              >
                WhatsApp
              </a>
              <div className="text-[var(--ink)]/55">{site.region}</div>
            </div>

            <dl className="mt-8 space-y-1.5 border-t border-[var(--ink)]/15 pt-6 text-sm">
              {site.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <dt className="text-[var(--ink)]/55">{h.day}</dt>
                  <dd className="text-[var(--ink)]/80">{h.time}</dd>
                </div>
              ))}
            </dl>

            <TitleBlock sheet="CONTACT" rev="02" className="mt-10" />
          </div>

          <form
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
            className="border border-[var(--ink)]/15 bg-white p-6 sm:p-8"
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="hidden">
              <label>
                Leave this field empty
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" required error={errors.name} autoComplete="name" />
              <Field label="Company" name="company" autoComplete="organization" />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                error={errors.email}
                autoComplete="email"
              />
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" />

              <div className="flex flex-col gap-2">
                <label htmlFor="project" className="mono-label text-[10px] text-[var(--ink)]/55">
                  Project type
                </label>
                <select
                  id="project"
                  name="project"
                  className="border border-[var(--ink)]/20 bg-white px-3 py-2.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--rust)]"
                  defaultValue="Website"
                >
                  <option>Website</option>
                  <option>E-commerce</option>
                  <option>Custom Application</option>
                  <option>AI Automation</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="mono-label text-[10px] text-[var(--ink)]/55">
                  Budget range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="border border-[var(--ink)]/20 bg-white px-3 py-2.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--rust)]"
                  defaultValue="R2,500 – R5,000"
                >
                  <option>R2,500 – R5,000</option>
                  <option>R5,000 – R15,000</option>
                  <option>R15,000 – R50,000</option>
                  <option>R50,000+</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label htmlFor="message" className="mono-label text-[10px] text-[var(--ink)]/55">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="What are you trying to build, and by when?"
                className={`border bg-white px-3 py-2.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--ink)]/35 focus:border-[var(--rust)] ${
                  errors.message ? "border-[var(--rust)]" : "border-[var(--ink)]/20"
                }`}
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-[var(--rust)]">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mono-label mt-8 w-full bg-[var(--rust)] px-6 py-3.5 text-[11px] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? "Sending…" : "Submit Request"}
            </button>

            <div aria-live="polite" className="mt-4 text-sm">
              {status === "sent" && (
                <p className="text-[var(--ink)]/70">
                  Thanks — your request is in. We&rsquo;ll reply the same working day.
                </p>
              )}
              {status === "error" && (
                <p className="text-[var(--rust)]">
                  Something went wrong sending that. Please email{" "}
                  <a href={mailtoLink} className="underline">
                    {site.email}
                  </a>{" "}
                  or call {site.phoneDisplay}.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="mono-label text-[10px] text-[var(--ink)]/55">
        {label}
        {required && <span className="ml-1 text-[var(--rust)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`border bg-white px-3 py-2.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--ink)]/35 focus:border-[var(--rust)] ${
          error ? "border-[var(--rust)]" : "border-[var(--ink)]/20"
        }`}
      />
      {error && (
        <p id={errorId} className="text-xs text-[var(--rust)]">
          {error}
        </p>
      )}
    </div>
  );
}
