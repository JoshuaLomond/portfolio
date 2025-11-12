# Joshua Lomond's Portfolio

This is the source code for my personal portfolio website, built with Next.js, Typescript, Tailwind CSS, and Sanity.io.

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
   git clone https://github.com/joshualomond/portfolio.git
   cd portfolio
   ```

2. **Install dependencies for the Next.js app:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

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

2. **View in Browser**

   The application will be available at `http://localhost:3000`.

## Project Structure

- `app/`: The Next.js application source code.
- `public/`: Static assets for the Next.js app.
