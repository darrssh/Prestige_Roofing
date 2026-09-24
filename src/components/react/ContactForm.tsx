import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { services } from "../../content/services";
import { business } from "../../config/site";

interface Status {
  kind: "idle" | "sending" | "success" | "error" | "unconfigured";
  message?: string;
}

const inputCls =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-[0.95rem] text-slate-text placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-copper focus:border-copper transition";

/**
 * Enquiry form. Posts to a Formspree endpoint configured via the
 * PUBLIC_FORMSPREE_ENDPOINT environment variable. Client-side validation,
 * honeypot spam trap, accessible labels, loading/success/error states.
 * Until the endpoint is configured the form is disabled by design and the
 * phone/email fallback is shown.
 */
export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const endpoint = import.meta.env.PUBLIC_FORMSPREE_ENDPOINT as string | undefined;
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: HTMLFormElement): Record<string, string> {
    const data = new FormData(form);
    const errs: Record<string, string> = {};
    const get = (k: string) => String(data.get(k) ?? "").trim();
    if (get("firstName").length < 2) errs.firstName = "Please enter your first name.";
    if (get("lastName").length < 2) errs.lastName = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")))
      errs.email = "Please enter a valid email address.";
    if (get("phone").replace(/\D/g, "").length < 8)
      errs.phone = "Please enter a valid phone number.";
    if (!get("service")) errs.service = "Please choose a service.";
    if (get("message").length < 10)
      errs.message = "Please tell us a little about the job (10+ characters).";
    return errs;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot — silently accept bots.
    if (String(new FormData(form).get("company") ?? "").trim() !== "") {
      setStatus({ kind: "success" });
      return;
    }
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    if (!endpoint) {
      setStatus({ kind: "unconfigured" });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setErrors({});
      setStatus({ kind: "success" });
    } catch {
      setStatus({
        kind: "error",
        message:
          "Something went wrong sending your enquiry. Please call us or email us directly — we'll respond as soon as possible.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-green-200 bg-green-50 p-8 text-center"
      >
        <CheckCircle2 size={40} className="mx-auto text-green-600" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold text-charcoal">
          Thank you — your enquiry is on its way.
        </h3>
        <p className="mt-2 text-muted">
          We&apos;ll be back to you as soon as possible. For anything urgent,
          call <a className="font-semibold text-copper-dark" href={business.phoneHref}>{business.phone}</a>.
        </p>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? (
      <p role="alert" className="mt-1.5 text-[0.83rem] font-medium text-red-700">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label="Roofing enquiry form">
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="cf-first" className="mb-1.5 block text-[0.88rem] font-semibold text-charcoal">
            First Name <span aria-hidden="true" className="text-copper-dark">*</span>
          </label>
          <input id="cf-first" name="firstName" type="text" autoComplete="given-name" placeholder="Jane" className={inputCls} aria-invalid={!!errors.firstName} />
          {err("firstName")}
        </div>
        <div>
          <label htmlFor="cf-last" className="mb-1.5 block text-[0.88rem] font-semibold text-charcoal">
            Last Name <span aria-hidden="true" className="text-copper-dark">*</span>
          </label>
          <input id="cf-last" name="lastName" type="text" autoComplete="family-name" placeholder="Citizen" className={inputCls} aria-invalid={!!errors.lastName} />
          {err("lastName")}
        </div>
      </div>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-[0.88rem] font-semibold text-charcoal">
            Email <span aria-hidden="true" className="text-copper-dark">*</span>
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" className={inputCls} aria-invalid={!!errors.email} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-[0.88rem] font-semibold text-charcoal">
            Phone <span aria-hidden="true" className="text-copper-dark">*</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="04XX XXX XXX" className={inputCls} aria-invalid={!!errors.phone} />
          {err("phone")}
        </div>
      </div>
      <div>
        <label htmlFor="cf-service" className="mb-1.5 block text-[0.88rem] font-semibold text-charcoal">
          Service Required <span aria-hidden="true" className="text-copper-dark">*</span>
        </label>
        <select id="cf-service" name="service" defaultValue="" className={inputCls} aria-invalid={!!errors.service}>
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="General Enquiry">General Enquiry</option>
        </select>
        {err("service")}
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-[0.88rem] font-semibold text-charcoal">
          Message <span aria-hidden="true" className="text-copper-dark">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder="Tell us about your roof — what needs attention, and where in Sydney is the property?"
          className={`${inputCls} resize-y`}
          aria-invalid={!!errors.message}
        />
        {err("message")}
      </div>

      {/* Honeypot spam trap — hidden from humans */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status.kind === "error" && (
        <div role="alert" className="flex gap-2.5 rounded-md border border-red-200 bg-red-50 p-3.5 text-[0.9rem] text-red-800">
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>{status.message}</span>
        </div>
      )}
      {status.kind === "unconfigured" && (
        <div role="alert" className="flex gap-2.5 rounded-md border border-copper/40 bg-copper-soft p-3.5 text-[0.9rem] text-charcoal">
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>
            Online enquiries aren&apos;t switched on yet — please contact us
            directly and we&apos;ll respond as soon as possible:{" "}
            <a className="font-bold text-copper-dark" href={business.phoneHref}>{business.phone}</a>{" "}
            or <a className="font-bold text-copper-dark" href={`mailto:${business.emailSales}`}>{business.emailSales}</a>.
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-charcoal px-7 py-4 font-display font-bold text-white transition-colors hover:bg-copper-dark disabled:cursor-wait disabled:opacity-70"
      >
        {status.kind === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          "Submit Your Details"
        )}
      </button>

      <p className="flex flex-col gap-1 text-center text-[0.85rem] text-muted">
        <span>
          Prefer to talk? Call <a href={business.phoneHref} className="font-semibold text-copper-dark">{business.phone}</a>
        </span>
        <span>
          or email <a href={`mailto:${business.emailSales}`} className="font-semibold text-copper-dark">{business.emailSales}</a>
        </span>
      </p>
    </form>
  );
}
