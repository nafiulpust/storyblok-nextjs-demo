import { RecommendedTour } from "@/components/RecommendedTour";

export const RecommendedTours = (params: any) => {
  return (
    <section className="container mx-auto py-16 w-full px-4">
      <h2 className="text-4xl font-bold max-w-[600px] mx-auto text-center">
        {params.blok.headline}
      </h2>
      <div className="grid grid-cols-2 gap-8 mt-12">
        {params.blok.tours.map((tour: any, index: number) => (
          <RecommendedTour story={tour} key={tour._uid || `tour-${index}`} />
        ))}
      </div>
    </section>
  );
};
