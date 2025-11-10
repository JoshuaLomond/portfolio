// app/page.tsx (NEW FILE)

import { sanityFetch } from "@/app/lib/sanity"; // Use your fetcher
import HomeClient from "./home-client"; // Import your client page
import { groq } from "next-sanity";

// This is GROQ, Sanity's query language.
// It's asking for all documents of type "project"
const PROJECTS_QUERY = groq`*[_type == "project"]{
  _id,
  title,
  description,
  tags,
  githubUrl,
  liveUrl
}`;

// This is now an async Server Component
export default async function Home() {
  // Fetch the projects from Sanity
  const projects = await sanityFetch({
    query: PROJECTS_QUERY,
    tags: ["project"], // Tag for revalidation
  });

  // Pass the fetched data to the client component
  return <HomeClient projects={projects} />;
}
