import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const NavItem = ({ href, children }: {href: string, children: React.ReactNode}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={isActive ? "font-bold cursor-default" : "hover:underline font-medium"}
    >
      {children}
    </Link>
  );
}