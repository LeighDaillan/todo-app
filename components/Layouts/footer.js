import Link from "next/link";
import { BsFacebook, BsGoogle, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = function () {
  return (
    <footer className="bg-gray-900 text-white pt-10 text-center">
      <h4 className="text-4xl">Stream</h4>
      <p className="max-w-2xl mx-auto opacity-75 leading-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam.
      </p>
      <div className="flex justify-evenly max-w-lg mx-auto mt-5">
        <Link href="https://www.facebook.com/Milagro.rog">
          <BsFacebook
            size={30}
            className="opacity-50 hover:opacity-100 cursor-pointer"
          />
        </Link>
        <Link href="mailto:francodaillanleigh@gmail.com">
          <BsGoogle
            size={30}
            className="opacity-50 hover:opacity-100 cursor-pointer"
          />
        </Link>
        <a href="https://github.com/LeighDaillan">
          <BsGithub
            size={30}
            className="opacity-50 hover:opacity-100 cursor-pointer"
          />
        </a>
        <Link href="https://www.linkedin.com/in/daillan-leigh-franco-9b83aa25a/">
          <BsLinkedin
            size={30}
            className="opacity-50 hover:opacity-100 cursor-pointer"
          />
        </Link>
      </div>
      <div className="bg-black mt-7 p-5 opacity-60">
        Created By: Daillan Leigh Franco
      </div>
    </footer>
  );
};

export default Footer;
