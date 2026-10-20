"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  buildMailtoHref,
  contactFormConfig,
  validateContactForm,
  type ContactFormValues,
} from "@/lib/form";
import { cn } from "@/lib/utils";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (contactFormConfig.mode === "endpoint" && contactFormConfig.action) {
      try {
        const response = await fetch(contactFormConfig.action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(event.currentTarget),
        });

        if (!response.ok) {
          throw new Error("The form provider rejected the request.");
        }
      } catch {
        setSubmitError(
          "The message could not be sent. Email me directly or try again later.",
        );
      }

      return;
    }

    window.location.href = buildMailtoHref(values);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      <Field
        id={`${formId}-name`}
        label="Name"
        error={errors.name}
      >
        <input
          id={`${formId}-name`}
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          className={fieldClassName}
        />
      </Field>
      <Field
        id={`${formId}-email`}
        label="Email"
        error={errors.email}
      >
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          className={fieldClassName}
        />
      </Field>
      <Field
        id={`${formId}-message`}
        label="Message"
        error={errors.message}
      >
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${formId}-message-error` : undefined
          }
          className={cn(fieldClassName, "resize-y")}
        />
      </Field>
      {submitError ? (
        <p className="text-sm text-foreground" role="alert">
          {submitError}
        </p>
      ) : (
        <p className="text-sm text-subtle">
          Messages open in your email client until a form provider is connected
          in <code className="font-mono text-xs">src/lib/form.ts</code>.
        </p>
      )}
      <div>
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}

const fieldClassName =
  "w-full border border-border bg-surface px-3 py-2.5 text-foreground outline-none focus-visible:border-foreground";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-foreground" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
