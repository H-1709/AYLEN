import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const CAREER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function validateEmailJsConfig(templateId) {
  return Boolean(SERVICE_ID && templateId && PUBLIC_KEY);
}

export async function sendContactForm(formData) {
  if (!validateEmailJsConfig(CONTACT_TEMPLATE_ID)) {
    throw new Error("Email service is not configured for contact form.");
  }

  return emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, formData, PUBLIC_KEY);
}

export async function sendCareerForm(formData) {
  if (!validateEmailJsConfig(CAREER_TEMPLATE_ID)) {
    throw new Error("Email service is not configured for career form.");
  }

  return emailjs.send(SERVICE_ID, CAREER_TEMPLATE_ID, formData, PUBLIC_KEY);
}
