import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className=" w-full md:w-2/3 text-gray-600">
          Thank you for visiting us! Let’s stay connected—join our community of trendsetters. Follow us on social media, or drop us a line anytime. We’re always here to help you find something amazing!
          </p>
        </div>
        <div>
          <p className=" text-xl font-medium mb-5">COMPANY</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className=" text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="  flex flex-col gap-1 text-gray-600">
            <li>+91-888-889-9999</li>
            <li>utsavgangani3110@gmail.com</li>
          </ul>
          -
        </div>
      </div>

      <div>
        <hr />
        <p className=" py-5 text-sm text-center ">
          <a
            href="https://www.linkedin.com/in/aman-pandey-6a6184233/"
            target="_blank"
          >
            ❤️ from Aman
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
