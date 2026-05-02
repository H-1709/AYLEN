# AYLEN Pharmaceuticals – Corporate Website  
A fully responsive, modern pharmaceutical company website built using **React + Vite**, designed for product showcasing, distributor listing, doctor-focused marketing, and corporate branding.

This project was created for **AYLEN Pharmaceutical Pvt. Ltd.**, featuring clean UI, smooth animations, and a complete product catalog powered by structured JSON data.

---

## 🚀 Features

### 🏠 **Home Page**
- Premium hero section with animated tagline  
- Gradient animations and smooth section reveals  
- “Why Choose AYLEN?” features grid  
- Product highlight section  
- Modern CTA section  

### 💊 **Products Page**
- Full dynamic product catalog  
- Categorized by therapy area:
  - Lipid Lowering Therapy  
  - Anti Hypertensive Therapy  
  - Anti Diabetic Therapy  
  - CAD Therapy  
  - Vitamin & Antacids  
  - NSAIDS & Others  
- Search by brand name or molecule  
- Auto-import product images using `import.meta.glob()`  
- Fully responsive grid layout  

### 🧑‍⚕️ **Distributors Page**
- Distributor list auto-loaded from structured data  
- Professional card-based layout  
- Region, company name, phone & email shown clearly  

### 📘 **About Page**
- Company vision  
- Mission statement  
- Strengths  
- Clean corporate layout  

### 👤 **Career Page**
- Job application form  
- Email submission using backend API (or EmailJS)  
- Responsive form layout  

### 📩 **Contact Page**
- Contact details  
- Inquiry form  
- Google Maps integration (optional)  

### 📌 **Global Features**
- Fully mobile responsive  
- Modern navbar (desktop + hamburger mobile menu)  
- Scroll-to-top button  
- Reusable components  
- Clean folder structure  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|----------|
| **React.js (Vite)** | UI framework |
| **CSS3 / Custom styling** | Layout & design |
| **Framer Motion** | Smooth animations |
| **React Router DOM** | Multi-page routing |
| **EmailJS / API** | Career form submissions |
| **JavaScript ES6+** | Logic & functionality |

## Backend will start at:
 http://localhost:5000


---

## 📧 Form Email Setup (No Backend Required)

Both **Career** and **Contact** forms now send submissions using **EmailJS** directly to your email.

1. Create an EmailJS account and connect `lentrixlifesciences@gmail.com` as the receiver.
2. Create:
   - one service
   - one template for contact form
   - one template for career form
3. Add a `.env` file in project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_CAREER_TEMPLATE_ID=your_career_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart dev server after adding env vars.

You can copy `.env.example` to `.env` and edit if needed:

```bash
cp .env.example .env
```


Template variables used:
- Contact: `name`, `company`, `location`, `phone`, `email`, `message`
- Career: `name`, `email`, `phone`, `position`, `message`
