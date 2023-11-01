import Button from "@/components/buttons/Button";
import ServicesCard from "@/components/cards/ServicesCard";
import ProjectsCard from "@/components/cards/ProjectsCard";
import Heading2 from "@/components/headings/SectionHeading";
import InsightsCardHome from "@/components/cards/InsightsCardsHome";
import Hero from "./Hero";
import Image from "next/image";
import image1 from "/public/images/a1.webp";
import image2 from "/public/images/a2.webp";
import image3 from "/public/images/a3.webp";
import image4 from "/public/images/a4.webp";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Sticky wrapper */}
      <div className=" relative w-full overflow-hidden rounded-2xl bg-cream">
        <section>
          <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
            <h2 className="max-w-lg px-10 z-10 text-center text-bright-brown">
              We are a dedicated team that makes your brand stand out.
            </h2>
            <Image
              width={500}
              quality={100}
              height={500}
              className="absolute bottom-0 left-3/4 w-60"
              src={image1}
              placeholder="blur"
              alt="abstract 3D render 1"
            />

            <Image
              quality={100}
              width={500}
              height={500}
              className="absolute -left-8 top-12 w-80"
              src={image2}
              placeholder="blur"
              alt="abstract 3D render 2"
            />
            <Image
              width={500}
              height={500}
              className="absolute -top-4 right-0 w-96"
              src={image3}
              placeholder="blur"
              alt="abstract 3D render 3"
            />
            <Image
              width={500}
              height={500}
              loading="lazy"
              className="absolute bottom-0 left-14 w-96"
              src={image4}
              placeholder="blur"
              alt="abstract 3D render 4"
            />
          </div>
        </section>

        <section className="section-padding">
          <div className="grid lg:grid-cols-12 gap-y-8">
            {/* Extract this heading 2 as a component */}
            <Heading2
              tag="about us"
              title="We believe in the power of simplicity and impeccable design"
            />
            <div className="flex flex-col gap-y-5 md:flex-row gap-x-12 col-span-6">
              <p className=" text-base font-medium text-brown">
                Our mission is to create remarkable digital experiences that
                inspire and resonate with our clients and their audiences. With
                a relentless pursuit of excellence, we combine creativity,
                innovation, and technical expertise to deliver tailored
                solutions that drive tangible results.{" "}
              </p>
              <p className=" text-base font-medium text-brown">
                We are dedicated to transforming ideas into impactful realities,
                leaving a lasting impression in the digital landscape. Trust us
                to bring your vision to life with our passion for minimalistic
                design and uncompromising attention to detail.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding grid grid-cols-1 lg:grid-cols-6 lg:gap-x-8">
          <div className="col-span-2 flex flex-col md:flex-row lg:flex-col md:items-center lg:items-start md:justify-between lg:justify-start gap-y-12">
            <Heading2
              tag="Services"
              title="We drive your success in the digital landscape."
              titleStyle="max-w-md"
            />
            <Button>View our work</Button>
          </div>
          <div className="mt-12 lg:mt-0 grid sm:grid-cols-9 gap-x-7 col-span-4">
            <ServicesCard
              // img="/images/branding.webp"
              alt="branding"
              title="Branding & Identity"
              description="We craft powerful brand identities that leave a lasting
                impression. From logo design to brand strategy, we help
                businesses establish a cohesive and memorable presence that
                stands out in today's competitive landscape."
            />

            <ServicesCard
              img="/images/ux.webp"
              alt="ux"
              title="User Experience (UX)"
              description="Our UX design services prioritize intuitive and delightful user
              experiences. Through wireframing, prototyping, and user testing,
              we create interactions that are engaging and aligned with the
              needs of your target audience."
            />

            <ServicesCard
              img="/images/webdevelopment.webp"
              alt="web development"
              title="Web Development"
              description="We create visually stunning and functional websites that engage
              visitors and drive conversions. Our team leverages the latest
              technologies to deliver responsive and scalable solutions
              tailored to your needs."
            />
          </div>
        </section>
      </div>
      <section className="section-padding ">
        <div className="flex flex-col md:flex-row lg:flex-col md:items-center lg:items-start md:justify-between lg:justify-start gap-y-12">
          <Heading2
            title="We understand your needs so you can leave your mark and stay ahead of the game"
            tag="our projects"
            tagStyle="text-cream"
            titleStyle="text-light-gray "
            lineStyle="bg-cream"
          />
          <Button>See more projects</Button>
        </div>
        <div className="grid md:grid-cols-8 mt-16 gap-5">
          <a href="" className="col-span-4">
            {/* card */}
            <ProjectsCard />
          </a>
          <a href="" className="col-span-4">
            {/* card */}
            <ProjectsCard />
          </a>
          <a href="" className="col-span-4">
            {/* card */}
            <ProjectsCard />
          </a>
          <a href="" className="col-span-4">
            {/* card */}
            <ProjectsCard />
          </a>
        </div>
      </section>
      <section className="section-padding">
        <div className="flex flex-col md:flex-row lg:flex-col md:items-center lg:items-start md:justify-between lg:justify-start gap-y-12 mb-16">
          <Heading2
            title="Stay within the loop, see our latest updates and news"
            tag="insights"
            tagStyle="text-cream"
            titleStyle="text-light-gray "
            lineStyle="bg-cream"
          />
          <Button>View more insights</Button>
        </div>
        <InsightsCardHome />
        <InsightsCardHome />
        <InsightsCardHome />
      </section>
    </main>
  );
}
