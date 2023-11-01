export default function InsightsCardHome() {
  return (
    <a
      href=""
      className="flex flex-col md:flex-row items-center px-2 md:px-5 lg:px-10 py-8 border-t border-dark-gray gap-x-8 w-full"
    >
      <div className="overflow-hidden mb-8 md:aspect-video rounded-lg lg:aspect-video  lg:w-1/2">
        <img
          width={500}
          height={400}
          className="w-full object-cover h-full"
          src="https://images.unsplash.com/photo-1697525994215-0fadc6c2c593?auto=format&fit=crop&q=80&w=2575&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="lg:w-1/2">
        <span className="text-base text-cream font-medium">July 15, 2023</span>
        <h3 className="text-white pt-1">
          Design Conference Takeaways: Unleashing Creativity and Collaboration
        </h3>
        <p className="mt-3 text-dark-gray">
          Dive into our exclusive coverage of the latest design conference,
          where industry leaders and visionaries came together to share
          groundbreaking ideas and foster innovation.
        </p>
        <span className="block mt-5 font-bold text-cream underline">
          read more
        </span>
      </div>
    </a>
  );
}
