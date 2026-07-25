import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-90" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted healthcare appointment platform
            dedicated to making quality medical care more accessible and
            convenient.
          </p>
          <p>
            Our mission is to simplify the way patients connect with qualified
            healthcare professionals. With an easy-to-use interface, patients
            can browse doctors by specialty, view detailed profiles, and book
            appointments online in just a few clicks—saving time and eliminating
            the hassle of traditional scheduling.
          </p>
          <p>
            We are committed to providing a secure, reliable, and seamless
            experience for both patients and doctors. By leveraging modern
            technology, we aim to improve healthcare accessibility while helping
            medical professionals efficiently manage their appointments and
            schedules.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            To build a user-friendly and reliable healthcare platform that
            connects patients with qualified doctors, enabling seamless
            appointment booking, easy doctor discovery, and efficient healthcare
            management through a secure and responsive web application.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convienience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Tailored recommendation and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
