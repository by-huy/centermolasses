import { twMerge } from "tailwind-merge";

export default function Heading2({
  tag,
  title,
  tagStyle,
  titleStyle,
  lineStyle,
}) {
  return (
    <>
      <div className="col-span-6">
        <p
          className={twMerge(
            "tracking-wider flex items-center gap-x-2 text-base font-medium uppercase text-bright-brown",
            tagStyle
          )}
        >
          <span
            className={twMerge(
              "inline-block h-[0.07rem] w-10  bg-bright-brown",
              lineStyle
            )}
          ></span>
          {tag}
        </p>
        <h2
          className={twMerge(
            "max-w-xl text-bright-brown",
            titleStyle
          )}
        >
          {title}
        </h2>
      </div>
    </>
  );
}
