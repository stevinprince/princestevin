import { profile } from "@/data/profile";

/**
 * Contact form submission strategy.
 *
 * The site has no backend yet. The default `mailto` mode opens the visitor's
 * email client with a prefilled message. That is an explicit fallback, not a
 * fake success state.
 *
 * To connect a form provider later (Formspree, Getform, Basin, or a custom
 * route):
 * 1. Set `mode` to `"endpoint"`.
 * 2. Set `action` to the provider URL.
 * 3. Keep client-side validation in `ContactForm`.
 */
export const contactFormConfig = {
  mode: "mailto" as "mailto" | "endpoint",
  action: "",
  email: profile.email,
};

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrors = Partial<ContactFormValues>;

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Enter a message of at least 10 characters.";
  }

  return errors;
}

export function buildMailtoHref(values: ContactFormValues): string {
  const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
  const body = encodeURIComponent(
    `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`,
  );

  return `mailto:${contactFormConfig.email}?subject=${subject}&body=${body}`;
}
