# 🚀 Saideep Anant Mali — Personal Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Saideep%20Anant%20Mali-Full%20Stack%20Developer-3a86ff?style=for-the-badge&labelColor=050a0f)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-portfolio--lovat--ten--8791fe23dz.vercel.app-3a86ff?style=for-the-badge&logo=vercel&logoColor=black&labelColor=050a0f)](https://portfolio-lovat-ten-8791fe23dz.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-saimali35-bf00ff?style=for-the-badge&logo=github&labelColor=050a0f)](https://github.com/saimali35)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-saideep--mali-0077B5?style=for-the-badge&logo=linkedin&labelColor=050a0f)](https://linkedin.com/in/saideep-mali-916301375)

A modern, **cyberpunk-inspired** personal portfolio website built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies, just clean code.

</div>

---

## 🌐 Live Preview

> **[portfolio-lovat-ten-8791fe23dz.vercel.app](https://portfolio-lovat-ten-8791fe23dz.vercel.app/)**

Deployed on **Vercel** with **Vercel Analytics** for real-time visitor insights.

---

## ✨ Features

- ⚡ **Cyberpunk UI** — neon glow effects, grid background, scanline overlay
- 📱 **Fully Responsive** — mobile-first design with hamburger navigation
- 🎞️ **Scroll Animations** — cards and sections animate in as you scroll
- 📧 **Functional Contact Form** — powered by EmailJS, no backend required
- 📊 **Vercel Analytics** — real-time traffic and visitor tracking
- 🔝 **Back-to-Top Button** — smooth scroll to top on all devices
- 🔗 **All links functional** — GitHub, LinkedIn, Email, and project links

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox, animations) |
| Logic | JavaScript ES6+ |
| Contact Form | [EmailJS](https://www.emailjs.com/) |
| Deployment | [Vercel](https://vercel.com/) |
| Analytics | Vercel Analytics |
| Fonts | Google Fonts — Orbitron, Share Tech Mono, Rajdhani |

---

## 📂 Project Structure
portfolio/
│
├── index.html       ← Main HTML file (all sections)
├── style.css        ← All styles, animations, responsive breakpoints
├── script.js        ← Scroll animations, nav toggle, EmailJS, back-to-top
└── README.md        ← This file

---

## 📸 Sections

| # | Section | Description |
|---|---|---|
| 01 | **Hero / Home** | Name, role, status badge, contact links, location |
| 02 | **Education** | BE, HSC, SSC with scores and years |
| 03 | **Technical Skills** | Frontend, Backend, Languages, Tools |
| 04 | **Featured Projects** | Pixel Art Animator, Lost & Found Registry, Portfolio |
| 05 | **Experience** | Walmart Global Tech virtual internship (Forage) |
| 06 | **Hackathons** | Bay2BayHacks, India AI Impact, Eureka IIT Bombay |
| 07 | **Languages** | English, Hindi, Marathi |
| 08 | **Contact** | EmailJS-powered form + social links |

---

## 📧 Contact Form Setup (EmailJS)

This portfolio uses [EmailJS](https://www.emailjs.com/) to send contact form submissions directly to your inbox — **no backend server required**.

### Step-by-step Setup

**1. Create an EmailJS account**
Go to [emailjs.com](https://www.emailjs.com/) and sign up for free.

**2. Add an Email Service**
- Dashboard → **Email Services** → Add New Service
- Connect your Gmail / Outlook account
- Copy your **Service ID** (e.g. `service_xxxxxxx`)

**3. Create an Email Template**
- Dashboard → **Email Templates** → Create New Template
- Use these variables in your template:
From: {{from_name}} <{{from_email}}>
Subject: New message from Portfolio
Message: {{message}}

- Copy your **Template ID** (e.g. `template_xxxxxxx`)

**4. Get your Public Key**
- Dashboard → **Account** → **Public Key**

**5. Update `script.js`**

```javascript
emailjs.init('YOUR_PUBLIC_KEY');

emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    {
        from_name:  document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message:    document.getElementById('message').value,
    }
);
```

> **Free tier:** 200 emails/month — more than enough for a portfolio.

---

## 📊 Vercel Analytics Setup

**1.** Push your project to GitHub.
**2.** Import the repo on [vercel.com](https://vercel.com/) → **New Project**.
**3.** After deployment, go to your project dashboard → **Analytics** tab → **Enable**.
**4.** Add this script to `index.html` before `</body>`:

```html
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

---

## 🚀 Getting Started Locally

**1. Clone the repository**

```bash
git clone https://github.com/saimali35/portfolio.git
cd portfolio
```

**2. Open in browser**

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Or use **Live Server** in VS Code — right-click `index.html` → **Open with Live Server**.

---

## ☁️ Deployment (Vercel)

**Option 1 — Drag & Drop**
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag your project folder onto the page
3. Click **Deploy**

**Option 2 — GitHub Integration (recommended)**
1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → Import Git Repository
3. Select your repo → **Deploy**
4. Every future `git push` auto-deploys

---

## 🎯 Roadmap

- [ ] Dark / Light theme toggle
- [ ] Downloadable resume (PDF)
- [ ] Project filtering by technology
- [ ] Individual project detail pages
- [ ] Blog / devlog section
- [ ] PWA support (offline-capable)

---

## 📄 License

This project is open source under the **MIT License**.
MIT License — Copyright (c) 2025 Saideep Anant Mali

---

## 👨‍💻 Author

**Saideep Anant Mali**  
*Computer Engineering Student · Full Stack Developer*  
📍 Navi Mumbai, India

| Platform | Link |
|---|---|
| 🌐 Portfolio | [portfolio-lovat-ten-8791fe23dz.vercel.app](https://portfolio-lovat-ten-8791fe23dz.vercel.app/) |
| 💻 GitHub | [github.com/saimali35](https://github.com/saimali35) |
| 🔗 LinkedIn | [linkedin.com/in/saideep-mali-916301375](https://linkedin.com/in/saideep-mali-916301375) |
| 📧 Email | [saideepmali162@gmail.com](mailto:saideepmali162@gmail.com) |

---

<div align="center">
Made with 🖤 and a lot of neon &nbsp;·&nbsp; Built on Vercel
</div>
