import { renderRichText,storyblokEditable } from "@storyblok/react/rsc";
export const Tour = (props: any) => {
  return (
    <main {...storyblokEditable(props.blok)} className="container mx-auto px-4 py-32 w-full">
      <h1 className="text-4xl font-bold">{props.blok.name}</h1>
      <img
        className="w-full object-cover my-8"
        src={props.blok.main_image.filename}
        alt={props.blok.name}
      />
      <p className="text-gray-600 text-lg">{props.blok.introduction}</p>
      <div
        className="prose mt-10 max-w-none"
        dangerouslySetInnerHTML={{
          __html: renderRichText(props.blok.body) || "",
        }}
      ></div>
    </main>
  );
};
