# Ayush Jaiswal — Developer Portfolio

A clean, fully responsive developer portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features dark/light mode, smooth animations, experience timeline, skills showcase, project gallery, and a working contact form.

🔗 **Live Demo:** https://ayushjaiswal.vercel.app/

---

## Use This as Your Own Portfolio

All content is in a single file — no coding knowledge needed.

**Steps:**

1. Fork or clone this repo
   ```bash
   git clone https://github.com/ayush6222/Portfolio-Ayush.git
   cd Portfolio-Ayush
   npm install
   ```

2. Open `app/store/useContentStore.js` and replace:
   - Your name, title, and summary
   - Your experience (company, role, dates, points)
   - Your skills (add/remove as needed)
   - Your projects (name, description, tech, images)
   - Your social links (LinkedIn, email, resume)

3. Add your project images to `public/Projects/` and skill icons to `public/skills/`

4. Run locally:
   ```bash
   npm run dev
   ```

5. Deploy free on Vercel:
   - Push to GitHub
   - Go to vercel.com → Import repo → Deploy
   - Done ✅

---

## Contact Form Setup (EmailJS)

1. Create a free account at emailjs.com
2. Add Gmail as email service
3. Create an email template
4. Create `.env.local` in root:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
5. Add the same variables in Vercel dashboard → Project Settings → Environment Variables

---

## Tech Stack

- **Framework:** Next.js 16, React 19
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State:** Zustand
- **Contact:** EmailJS
- **Deploy:** Vercel

---

## Features

- Single source of truth — all content in one file
- Dark / Light theme with localStorage persistence
- Fully responsive — mobile, tablet, desktop
- Experience timeline with company logos
- Skills section with categories (Using Now, Generative AI, Exploring)
- Project gallery with image modal
- Working contact form
- Scroll progress bar
- SEO optimized with structured data

---

## Contact

- **Portfolio:** https://ayushjaiswal.vercel.app/
- **LinkedIn:** https://www.linkedin.com/in/ayush-jais/
- **Email:** ayush42837272@gmail.com

---

⭐ Star this repo if it helped you!
