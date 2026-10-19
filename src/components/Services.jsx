// services data store
import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We create and manage advertising campaigns across various platforms to help businesses reach their target audience effectively.",
      icon: assets.ads_icon,
    },

    {
      title: "Content Creation",
      description:
        "We produce high-quality content, including articles, videos, and graphics, to engage your audience and promote your brand.",
      icon: assets.content_icon,
    },
    {
      title: "Marketing Strategy",
      description:
        "We develop comprehensive marketing strategies tailored to your business goals, ensuring maximum impact and ROI.",
      icon: assets.marketing_icon,
    },
  ];
  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that moves your business forward."
      />

      <div className=" flex flex-col md:grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
