import Button from "../Buttons/Button";

export default function Footer() {
  return (
    <>
      <footer className="bg-cream section-padding pb-8 rounded-t-2xl mt-16">
        <div className="text-bright-brown lg:flex justify-between gap-x-32 mb-20">
          <h2 className="max-w-sm">
            Don’t be shy, give us a call, email or whatever
          </h2>
          <div className="space-y-5 pt-6 lg:pt-0">
            <p className="max-w-xl">
              Our team is eagerly standing by to hear all about your exciting
              project, big ideas, or any questions you may have. Let&apos;s
              embark on this journey together and make your dreams a reality.
              We&apos;re here, ready to make magic happen!
            </p>
            <Button>Contact us now</Button>
          </div>
        </div>
        <div className="grid sm:grid-cols-8 gap-x-4">
          <span
            className="col-span-5 font-display text-[clamp(2rem, 20vw, 5rem)]
           font-extrabold uppercase text-bright-brown order-last sm:order-first text-footer-display self-end"
          >
            center molasses
          </span>

          <div className="flex justify-between items-end w-full col-span-5 sm:col-span-3 sm:mb-0 mb-8">
            <div className="flex flex-col text-bright-brown">
              <p className="font-black uppercase pb-4">menu</p>
              <ul className="flex flex-col gap-y-2 font-medium">
                <li>
                  <a href="">Work</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Insights</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col text-bright-brown">
              <p className="font-black uppercase pb-4">menu</p>
              <ul className="flex flex-col gap-y-2 font-medium">
                <li>
                  <a href="">Work</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Insights</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col text-bright-brown">
              <p className="font-black uppercase pb-4">menu</p>
              <ul className="flex flex-col gap-y-2 font-medium">
                <li>
                  <a href="">Work</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Insights</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
