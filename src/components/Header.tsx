import { VFC } from 'react';
import { Link } from 'react-scroll';

export type HeaderProps = {};

const Header: VFC<HeaderProps> = ({}) => {
  return (
    <div className="flex flex-col justify-between max-w-xl min-h-screen px-4 mx-auto lg:pt-16 lg:flex-row md:px-16 lg:max-w-screen-xl">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            <div className="font-nes">
              NO <span className="text-pink-600">CODE</span>,
              <br />
              NO LIFE.
            </div>
          </h2>
        </div>
        <div className="flex items-center">
          <Link
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-600 hover:cursor-pointer focus:shadow-outline focus:outline-none"
            to="career"
            smooth={true}
          >
            who's kaduhiro?
          </Link>
        </div>
      </div>
      <div className="bg-black fixed top-0 left-0 w-full h-full -z-1">
        <img className="w-screen h-screen object-cover blur-[2px]" src="/bg.png" alt="bg" />
      </div>
    </div>
  );
};

export default Header;
