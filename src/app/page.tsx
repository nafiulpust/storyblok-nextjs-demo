import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import "@/storyblok";
import { draftMode } from "next/headers";

const fetchHomePage = async () => {
  const {isEnabled} = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
    resolve_relations: "recommended_tours.tours",
  });
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();
  return <StoryblokStory story={story} />;
};

export default HomePage;
