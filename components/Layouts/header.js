import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { BiLogIn, BiLogOut, BiHome } from "react-icons/bi";
import { TbNotebook } from "react-icons/tb";

const Header = function () {
  const { data: session, status } = useSession();
  return (
    <>
      <header className="border-b border-gray-200 px-10 md:px-32">
        <div className="flex flex-col md:flex-row justify-between content-center py-5 px-5 drop-shadow-2xl">
          <span className="text-2xl text-center font-bold md:border-l-4 inline-block md:border-blue-900 px-2">
            Stream
          </span>
          <nav>
            <ul className="flex justify-center sm:pt-5 md:pt-0">
              <li className="mx-5 text-base md:text-xl">
                <Link href="/" className="nav-animation">
                  <BiHome size={23} />
                  Home
                </Link>
              </li>
              <li className="mx-5 text-base md:text-xl ">
                <Link href="Todos" className="nav-animation">
                  <TbNotebook size={23} />
                  Todos
                </Link>
              </li>
              <li className="mx-5 text-base md:text-xl">
                {status === "authenticated" ? (
                  <button onClick={() => signOut()} className="nav-animation">
                    <BiLogOut size={23} />
                    Sign Out
                  </button>
                ) : (
                  <Link href="signin" className="nav-animation">
                    <BiLogIn size={23} />
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
