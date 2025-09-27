import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import "@/storyblok";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.stories.map((story) => ({
    slug: story.slug,
  }));
};

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

const TourPage = async (props: { params: { slug: string } }) => {
  const story = await fetchTourPage(props.params.slug);
  return <StoryblokStory story={story} />;
};

export default TourPage;
