# Fast Forward Sport - Motorsport Engineering Website

A professional motorsport engineering company website built with Next.js 16, React 19, and Tailwind CSS 4.

## 🏁 Overview

Fast Forward Sport is a modern, high-performance website showcasing motorsport engineering services, projects, and facilities. The design features a dark theme with vibrant yellow and purple accents, creating a dynamic and professional appearance.

## ✨ Features

### Pages
- **Home** - Hero section with featured services and projects
- **About** - Company story, values, and team members
- **Services** - Comprehensive service offerings (Rally, Engine, Racing, Academy, etc.)
- **Projects** - Portfolio of completed projects with filtering
- **Facilities** - Workshop and equipment showcase
- **Contact** - Contact form and company information

### Design Elements
- 🎨 Dark theme with vibrant accents (Yellow #f4e42e, Purple #8b5cf6, Lime #d4ff4c)
- 📱 Fully responsive design for all devices
- 🎯 Modern, clean typography
- 🏎️ High-quality motorsport imagery
- ⚡ Smooth animations and transitions
- 🧭 Intuitive navigation with mobile menu

## 🚀 Tech Stack

- **Framework:** Next.js 16.2.1 (App Router)
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Fonts:** Geist Sans & Geist Mono

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

The development server runs on [http://localhost:3000](http://localhost:3000)

### Project Structure

```
fast-forward-sport-frontend/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Main navigation bar
│   │   └── Footer.tsx         # Site footer
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── projects/
│   │   └── page.tsx          # Projects page
│   ├── facilities/
│   │   └── page.tsx          # Facilities page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── public/                   # Static assets
└── package.json
```

## 🎨 Color Palette

- **Background:** `#0a0a0a` (Dark)
- **Foreground:** `#ededed` (Light gray)
- **Accent Yellow:** `#f4e42e`
- **Accent Purple:** `#8b5cf6`
- **Accent Lime:** `#d4ff4c`

## 📋 Features by Page

### Home Page
- Full-screen hero with call-to-action buttons
- Services overview grid
- Featured projects showcase
- Statistics section
- CTA section

### About Page
- Company story
- Core values
- Team members showcase

### Services Page
- Detailed service descriptions
- Feature lists for each service
- Process timeline
- Service categories: Rally, Engine, Racing, Academy, Consultancy, Fabrication

### Projects Page
- Project portfolio with filtering
- Project details and results
- Category tags
- Statistics overview

### Facilities Page
- Workshop facilities overview
- Equipment listing
- Location information
- Visit booking CTA

### Contact Page
- Contact information
- Working contact form
- Social media links
- Map placeholder

## 🔧 Customization

### Update Colors
Edit `app/globals.css` to change the color scheme:

```css
:root {
  --accent-yellow: #f4e42e;
  --accent-purple: #8b5cf6;
  --accent-lime: #d4ff4c;
}
```

### Update Content
- Services: Edit the `services` array in respective page files
- Projects: Edit the `projects` array in `app/projects/page.tsx`
- Contact Info: Update information in `app/contact/page.tsx` and `app/components/Footer.tsx`

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚢 Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js

```bash
# Build for production
npm run build

# The output will be in the .next folder
```

## 📝 License

This project is proprietary software for Fast Forward Sport.

## 🤝 Support

For technical support or inquiries:
- Email: fastforwardsport@outlook.com
- Phone: +1 (555) 123-4567

---

Built with ⚡ by Fast Forward Sport

