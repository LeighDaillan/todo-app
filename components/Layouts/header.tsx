import Link from "next/link";
import { BiLogIn } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { TbNotebook } from "react-icons/tb";

const Header = function () {
  return (
    <>
      <header className="border-b border-gray-200 px-32">
        <div className="flex justify-between content-center py-5 px-5  drop-shadow-2xl">
          <span className="text-2xl font-bold border-l-4 inline-block border-blue-900 px-2">
            Stream
          </span>
          <nav>
            <ul className="flex">
              <li className="mx-5 text-xl">
                <Link href="#" className="flex">
                  <BiHome size={23} />
                  Home
                </Link>
              </li>
              <li className="mx-5 text-xl">
                <Link href="#" className="flex ">
                  <TbNotebook size={23} />
                  Todos
                </Link>
              </li>
              <li className="mx-5 text-xl">
                <Link href="#" className="flex ">
                  <BiLogIn size={23} />
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
