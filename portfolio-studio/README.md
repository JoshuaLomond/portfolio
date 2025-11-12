# Sanity Studio for Portfolio

This directory contains the Sanity Studio for managing the content of my personal portfolio website.

## What is Sanity?

[Sanity.io](https://www.sanity.io/) is a headless CMS that allows for flexible content modeling and a customizable editing experience. This studio is configured to manage the "Project" schema for the portfolio.

## Running the Studio

1. **Navigate to the studio directory:**

   ```bash
   cd portfolio-studio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The studio will be running at `http://localhost:3333`.

## Content Schema

The content model is defined in the `schemaTypes/` directory. Currently, it includes:

- **Project:** Defines the structure for a portfolio project, including fields for title, description, images, technologies used, and links.

To add or modify content types, you can edit the files in the `schemaTypes/` directory and update `schemaTypes/index.ts`.
