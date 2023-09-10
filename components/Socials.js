import Link from "next/link";

import {
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterLine,
  RiMailLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={
          "https://instagram.com/anandhu_.sk?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
        }
        className="hover:text-accentprimary transition-all duration-300"
      >
        {" "}
        <RiInstagramLine />{" "}
      </Link>
      <Link
        href={"www.linkedin.com/in/anandhu-skumar"}
        className="hover:text-accentprimary transition-all duration-300"
      >
        {" "}
        <RiLinkedinLine />{" "}
      </Link>
      <Link
        href={"https://github.com/anandhus-kumar"}
        className="hover:text-accentprimary transition-all duration-300"
      >
        {" "}
        <RiGithubLine />{" "}
      </Link>
      <Link
        href={"https://twitter.com/anandhusk_?t=xl5gQXgrwciNWFPOXBdJVA&s=09"}
        className="hover:text-accentprimary transition-all duration-300"
      >
        {" "}
        <RiTwitterLine />{" "}
      </Link>
      <Link
        href={"mailto:anandhusk22@gmail.com"}
        className="hover:text-accentprimary transition-all duration-300"
      >
        {" "}
        <RiMailLine />{" "}
      </Link>
    </div>
  );
};

export default Socials;
