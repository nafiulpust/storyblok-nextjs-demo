import { storyblokEditable } from "@storyblok/react/rsc";
export const Hero = (params: any) => {
    return (
      <section {...storyblokEditable(params.blok)} className="container mx-auto p-4 w-full flex flex-col justify-center items-center min-h-[70vh] gap-6">
        <h1 className="text-7xl font-bold">{params.blok.headline}</h1>
        <p className="text-2xl">{params.blok.content}</p>
      </section>
    );
};