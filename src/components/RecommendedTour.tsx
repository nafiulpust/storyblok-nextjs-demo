import Link from "next/link";
import Image from "next/image";

export const RecommendedTour = (props: any) => {
  console.log(props);
  return (
    <div className="bg-white pt-2 px-2 pb-4 rounded-sm shadow flex flex-col gap-2">
      <img
        src={props.story.content.main_image?.filename || ""}
        alt={props.story.content.name}
        className="w-full h-full object-cover"
        width={300}
        height={200}
      />
      <h3 className="text-xl font-bold">{props.story.content.name}</h3>
      <p>
        {Number(props.story.content.price).toLocaleString("en-US", {
          style: "currency",
          currency: "TWD",
          minimumFractionDigits: 0,
        })}
      </p>
      <p className="text-gray-600">
        <b>Location:</b> {props.story.content.location}
      </p>
      <div>
        <Link
          href={`/${props.story.full_slug}`}
          className="font-bold underline"
        >
          View Tour &rarr;
        </Link>
      </div>
    </div>
  );
};
