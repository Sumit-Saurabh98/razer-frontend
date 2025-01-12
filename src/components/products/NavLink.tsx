import Link from "next/link";

const NavLink = ({ href, isActive, children }:{ href: string, isActive: boolean, children: React.ReactNode}) => (
  <Link href={href}>
    <span className={`text-xs font-bold ${isActive ? 'text-[#44d62c]' : 'text-[#999999]'}`}>
      {children}
    </span>
  </Link>
);

export default NavLink;