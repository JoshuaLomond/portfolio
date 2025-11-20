# Joshua Lomond's Portfolio

A modern, visually stunning portfolio website showcasing my work as a Full-Stack Developer. Built with Next.js, TypeScript, Tailwind CSS, and powered by Sanity.io for dynamic content management.

🌐 **Live Site:** [joshlomond.dev](https://joshlomond.dev)

## ✨ Features

- **Premium Design System:** Dark-mode-first aesthetic with glassmorphism effects, cyan/violet gradients, and smooth animations
- **Dynamic Content:** Portfolio projects are managed through Sanity.io headless CMS
- **Fully Responsive:** Optimized layouts for all screen sizes from mobile to 4K displays
- **Smooth Animations:** Powered by Framer Motion for elegant page transitions and interactions
- **SEO Optimized:** Complete with meta tags, Open Graph, and JSON-LD schema markup
- **Modern Typography:** Custom font stack using Outfit and Inter from Google Fonts
- **Interactive Resume:** Dedicated resume page with downloadable PDF

## 🛠️ Tech Stack

### Core Technologies

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

### Content & Data

- **CMS:** [Sanity.io](https://www.sanity.io/)
- **Data Fetching:** `next-sanity` with GROQ queries

### Deployment

- **Platform:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- A Sanity.io account and project

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/joshualomond/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory:

   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   NEXT_PUBLIC_SANITY_USE_CDN="true"
   ```

   Get these values from your [Sanity project settings](https://www.sanity.io/manage).

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/         # React components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SocialLinks.tsx
│   ├── config/             # Configuration files
│   │   └── config.ts
│   ├── lib/                # Sanity client setup
│   │   └── sanity.ts
│   ├── resume/             # Resume page
│   │   └── page.tsx
│   ├── globals.css         # Global styles & design system
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (server component)
│   └── home-client.tsx     # Home page client component
├── public/                 # Static assets
└── package.json
```

## 🎨 Design System

The portfolio features a custom design system with:

- **Color Palette:** Deep slate backgrounds with cyan and violet accents
- **Glassmorphism:** Semi-transparent cards with backdrop blur effects
- **Typography:** Outfit for headings, Inter for body text
- **Animations:** Floating elements, smooth transitions, and hover effects
- **Custom Utilities:** Glass panels, gradient text, and custom scrollbars

## 📄 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

Joshua Lomond

- Email: [josh@joshlomond.dev](mailto:josh@joshlomond.dev)
- LinkedIn: [linkedin.com/in/joshua-lomond](https://linkedin.com/in/joshua-lomond)
- GitHub: [github.com/JoshuaLomond](https://github.com/JoshuaLomond)

---

Built with ❤️ using Next.js & Tailwind CSS
