import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const Grid = (params: any) => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto p-4 w-full px-4">
        <h2 className="text-4xl font-bold max-w-[700px] mx-auto text-center">{params.blok.headline}</h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-4">
          {params.blok.items.map((blok: any) => (
            <StoryblokServerComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};
