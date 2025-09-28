import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import "@/storyblok";
import { RecommendedTour } from "@/components/RecommendedTour";

import { draftMode } from "next/headers";

const fetchHelloPage = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`hello`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.story;
};
const fetchAllTours = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.stories;
};

const HelloPage = async () => {
  const story = await fetchHelloPage();
  return (
    <div>
      <StoryblokStory story={story} />
    </div>
  );
};

export default HelloPage;
