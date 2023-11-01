export default function ProjectsCard() {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1697525994215-0fadc6c2c593?auto=format&fit=crop&q=80&w=2575&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute z-20 bottom-0 bg-cream w-full flex px-5 py-5 justify-between rounded-t-xl">
          <div className=" text-bright-brown">
            <span className="text-base font-medium">Branding</span>
            <h3>NIKE</h3>
          </div>
          <button className="px-4 py-1 bg-white rounded-full flex text-bright-brown font-bold gap-x-3 items-center">
            <span>View Case Study</span>
            <span className=" bg-black p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className=" stroke-white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9l6 6-6 6" />
                <path d="M4 4v7a4 4 0 0 0 4 4h11" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
