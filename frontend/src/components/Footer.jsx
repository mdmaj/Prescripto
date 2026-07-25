import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------------ Left Secrion ------  */}
        <div>
          <img className="mb-5 w-40 " src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, maxime
            quis doloribus porro provident similique beatae aspernatur corrupti,
            repudiandae deleniti molestias maiores nobis ea sunt obcaecati
            magnam ipsum autem deserunt.
          </p>
        </div>

        {/* ------------ Center Secrion ------  */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gay-600 ">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ------------ Right Secrion ------  */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gay-600 ">
            <li>+1-222-222-222</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ------------ Copy right text ---------------  */}
      <hr />
      <div>
        <p className="py-5 text-sm text-center ">
          All rights reserved @ prescripto - 2026
        </p>
      </div>
    </div>
  );
};

export default Footer;
