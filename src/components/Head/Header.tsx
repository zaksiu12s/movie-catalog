import { ReactNode } from "react";
import SearchIcon from "../../assets/SearchIcon";

function HeaderLink(props: {
  text?: string;
  href: string;
  children?: ReactNode;
}) {
  return (
    <a href={props.href} className="text-white hover:text-gray-400 transition-colors duration-300">
      {props.text}
      {props.children}
    </a>
  );
}


const Header = () => {
  return (
    <nav className="bg-gray-900 w-full px-6 py-6 shadow-md text-center flex justify-center gap-x-8 gap-y-2 text-lg md:text-xl font-semibold flex-wrap items-center">
      <HeaderLink text="Home" href="/movie-catalog/" />
      <HeaderLink text="About" href="/movie-catalog/about" />
      <HeaderLink href="/movie-catalog/search-page">
        <div className="w-6">
          <SearchIcon />
        </div>
      </HeaderLink>
    </nav>
  );
};

export default Header;
