import { storyblokEditable } from "@storyblok/react/rsc";
export const Testimonial = (params: any) => {
  return (
    <div {...storyblokEditable(params.blok)} className="bg-white p-8 rounded-sm shadow">
      <h3 className="text-md font-bold mb-4" >{params.blok.comment}</h3>
      <p className="text-gray-600">{params.blok.name}</p>
    </div>
  );
};
