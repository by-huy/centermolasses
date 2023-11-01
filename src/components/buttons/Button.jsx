export default function Button({ children }) {
  return (
    <>
      <button className="bg-accent font-denton group relative flex  items-center justify-center justify-self-start overflow-hidden rounded-full border-2 border-brown px-32 py-7 text-base font-bold">
        <span className=" absolute h-fit w-full">
          <span className="relative flex flex-col items-center justify-center ">
            <span className="absolute flex items-center justify-center  text-brown transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:opacity-0">
              {children}
            </span>
            <span className="ease-[cubic-bezier(0, 0.55, 0.45, 1)] absolute flex h-20 w-full translate-y-20 items-center justify-center rounded-full bg-brown text-cream transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {children}
            </span>
          </span>
        </span>
      </button>
    </>
  );
}
