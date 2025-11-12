# Joshua Lomond's Portfolio

This is the source code for my personal portfolio website, built with Next.js, Tailwind CSS, and Sanity.io.

## Features

- **Dynamic Content:** Portfolio projects are managed through a headless CMS (Sanity.io).
- **Responsive Design:** Fully responsive layout for all devices.
- **Modern Tech Stack:** Built with the latest features of Next.js and React.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **CMS:** [Sanity.io](https://www.sanity.io/)
- **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies for the Next.js app:**

   ```bash
   npm install
   ```

3. **Install dependencies for the Sanity Studio:**

   ```bash
   cd portfolio-studio
   npm install
   cd ..
   ```

4. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the following variables. You can get these from your Sanity project settings.

   ```plaintext
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   NEXT_PUBLIC_SANITY_USE_CDN="true"
   ```

## Running the Development Servers

You need to run two development servers simultaneously: one for the Next.js frontend and one for the Sanity Studio.

1. **Run the Next.js app:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

2. **Run the Sanity Studio:**
   In a separate terminal, navigate to the `portfolio-studio` directory and run:

   ```bash
   cd portfolio-studio
   npm run dev
   ```

   The Sanity Studio will be available at `http://localhost:3333`.

## Project Structure

- `app/`: The Next.js application source code.
- `public/`: Static assets for the Next.js app.
- `portfolio-studio/`: The Sanity Studio source code.
  - `schemaTypes/`: Content schemas for Sanity.
