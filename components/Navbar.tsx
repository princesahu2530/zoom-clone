import Image from 'next/image';
import Link from 'next/link';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Yoom logo"
          className="w-10 h-10 max-sm:w-8 max-sm:h-8"
        />
        <p className="text-[26px] font-extrabold text-white hidden sm:block">
          YOOM
        </p>
      </Link>
      <div className="flex-between gap-5">
        {/* Replace the authenticated UserButton with a static profile icon */}
        <Link href="/profile">
          <Image
            src="/icons/profile.svg"
            width={32}
            height={32}
            alt="Profile Icon"
            className="cursor-pointer w-8 h-8"
          />
        </Link>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
