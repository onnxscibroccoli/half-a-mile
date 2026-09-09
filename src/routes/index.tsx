import { createFileRoute } from "@tanstack/react-router";
import { ArticleEssay } from "@/components/article-essay";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title:
          "A Five-Year-Old Walked Half a Mile. Virginia Made It a Crime. — Half a Mile",
      },
      {
        name: "description",
        content:
          "Karyann Parkinson was convicted after her five-year-old walked to a neighborhood pond. Virginia law expressly protects reasonable childhood independence.",
      },
    ],
  }),
});

function Home() {
  return <ArticleEssay />;
}
