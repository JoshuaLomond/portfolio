// app/lib/sanity.ts

import { createClient, groq } from "next-sanity";
import { cache } from "react";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = "2024-01-01"; // Use a recent API version

const useCdn = process.env.NEXT_PUBLIC_SANITY_USE_CDN === "true";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: useCdn, // <--- USE THE VARIABLE HERE
});

// Helper function for fetching data with Caching
// The cache() function from React deduplicates requests
export const sanityFetch = cache(
  async ({
    query,
    params = {},
    tags = [],
  }: {
    query: string;
    params?: Record<string, any>;
    tags?: string[];
  }) => {
    return client.fetch(query, params, {
      next: {
        // Revalidate tags for on-demand revalidation
        tags,
      },
    });
  }
);
