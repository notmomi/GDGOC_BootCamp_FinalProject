
import heroImage from "../assets/images/image-hero-desktop.svg"; 

const Section = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-50">
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Make <span className="text-indigo-600">Remote Work</span>
        </h1>
        <p className="text-gray-600">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-700">
        Learn more</button>
        <div className="flex space-x-4 mt-8">
          <img src="../assets/images/client-audiophile.svg" alt="audiophile" />
          <img src="../assets/images/client-databiz.svg" alt="databiz" />
          <img src="../assets/images/client-meet.svg" alt="meet" />
          <img src="../assets/images/client-maker.svg" alt="maker" />
        </div>
      </div>
      <div>
        <img src={heroImage} 
        alt="Hero" className="w-full max-w-lg" />
      </div>
    </section>
  );
};

export default Section;