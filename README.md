# Rocxion Group - Smart Energy Solutions

A modern, professional website for Rocxion Group, a leading solar energy company in South Africa. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Clean, professional design optimized for solar energy company
- **Responsive Layout**: Fully responsive across all devices
- **Brand Identity**: Custom color palette extracted from company logo
- **Interactive Components**: Smooth animations and transitions with Framer Motion
- **Complete Pages**: Home, About, Services, Projects, Gallery, and Contact pages
- **Contact Form**: Functional contact form with API endpoint
- **SEO Optimized**: Proper meta tags and structured content

## 🎨 Brand Colors

- **Primary**: Sky Blue (#38BDF8) - Main brand color from logo
- **Secondary**: Navy/Charcoal (#1E293B) - Text and contrast
- **Accent**: Red (#EF4444) - Highlights and call-to-action
- **Neutral**: Light Gray (#F8FAFC) - Backgrounds and subtle elements

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd rocxion-group-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── projects/          # Projects page
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   ├── api/contact/       # Contact form API endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   ├── HeroSection.tsx   # Hero section component
│   ├── ServiceCard.tsx   # Service card component
│   ├── ProjectCard.tsx   # Project card component
│   ├── GalleryGrid.tsx   # Gallery grid component
│   └── ContactForm.tsx   # Contact form component
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Fonts**: Roboto & Open Sans (Google Fonts)
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📋 Pages Overview

### Home Page (`/`)
- Hero section with company tagline
- Company introduction and certifications
- Services overview with cards
- Featured project showcase
- Call-to-action sections

### About Page (`/about`)
- Company mission and overview
- Director profile (Rocky Ramokolo)
- Compliance and accreditations (ECB, CIDB, DoL)
- Company values

### Services Page (`/services`)
- Detailed service descriptions
- Process workflow
- Why choose us section
- Service benefits

### Projects Page (`/projects`)
- Featured project: 50kW Solar Installation
- Project portfolio grid
- Project statistics
- Process overview

### Gallery Page (`/gallery`)
- Filterable image gallery
- Project highlights with stats
- Before/after comparisons
- Lightbox functionality

### Contact Page (`/contact`)
- Contact form with validation
- Business information
- Location map placeholder
- FAQ section

## 🔧 Customization

### Adding Real Images
Replace placeholder images in:
- `/public/` directory for static images
- Update image sources in components
- Add actual project photos to gallery

### Contact Form Integration
The contact form currently logs to console. To integrate with email services:
1. Update `/src/app/api/contact/route.ts`
2. Add email service (SendGrid, Nodemailer, etc.)
3. Configure environment variables

### Google Maps Integration
Replace map placeholder in contact page:
1. Get Google Maps API key
2. Install Google Maps component
3. Update contact page with actual map

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📞 Contact Information

- **Address**: 22 Dende Street, Nellmapius, Pretoria
- **Phone**: 083 313 8754
- **Email**: rramokolo@gmail.com

## 📄 License

This project is proprietary to Rocxion Group.

---

**Note**: This website contains placeholder content and images. Replace with actual company content, photos, and integrate with real services before deployment.
