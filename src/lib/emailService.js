import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID?.trim();
const CAREER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID?.trim();
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

function missingEnvMessage() {
  return "Email service is not configured. Set VITE_EMAILJS_* environment variables and redeploy.";
}

function validateEmailJsConfig(templateId) {
  return Boolean(SERVICE_ID && templateId && PUBLIC_KEY);
}

function assertConfig(templateId) {
  if (!validateEmailJsConfig(templateId)) {
    throw new Error(missingEnvMessage());
  }
}

function normalizeError(error) {
  if (error?.text) return error.text;
  if (error?.message) return error.message;
  return "Something went wrong while sending email. Please try again.";
}

export async function sendContactForm(formData) {
  assertConfig(CONTACT_TEMPLATE_ID);

  try {
    return await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, formData, PUBLIC_KEY);
  } catch (error) {
    throw new Error(normalizeError(error));
  }
}

export async function sendCareerForm(formData) {
  assertConfig(CAREER_TEMPLATE_ID);

  try {
    return await emailjs.send(SERVICE_ID, CAREER_TEMPLATE_ID, formData, PUBLIC_KEY);
  } catch (error) {
    throw new Error(normalizeError(error));
  }
}
