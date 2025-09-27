import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import "@/storyblok";
import { RecommendedTour } from "@/components/RecommendedTour";



const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};
const featchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.stories;
};

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await featchAllTours();
  return (
    <div>
      <StoryblokStory story={story} />
      <div className="grid grid-cols-2 gap-8 container mx-auto py-16 w-full px-4">
        {tours.map((tour: any, index: number) => (
          <RecommendedTour story={tour} key={tour._uid || `tour-${index}`} />
        ))}
      </div>
    </div>
  );
};
export default ToursPage;
