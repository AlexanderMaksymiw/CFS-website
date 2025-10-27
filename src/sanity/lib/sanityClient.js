import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "lvgzjjyu",
  dataset: "cfs_content",
  apiVersion: "2025-10-24",
  useCdn: true, // `true` for fast, cached responses; `false` for fresh data
});
