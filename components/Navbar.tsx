import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#1e1e1e] border-b border-[#333333]">
      <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 sm:px-12 py-4 sm:py-5">

        {/* Name */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-[#D4AF37]">Prinze</span> Frias
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 sm:gap-8 list-none m-0 p-0 text-sm sm:text-base">

          <li className="group relative">
            <Link
              href="/"
              className="text-white hover:text-[#D4AF37] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
          </li>

          <li className="group relative">
            <Link
              href="/about"
              className="text-white hover:text-[#D4AF37] transition-colors duration-200"
            >
              About
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
          </li>

          <li className="group relative">
            <Link
              href="/portfolio"
              className="text-white hover:text-[#D4AF37] transition-colors duration-200"
            >
              Portfolio
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
          </li>

          <li>
            <Link
              href="/contacts"
              className="relative inline-block px-4 sm:px-5 py-1.5 border border-[#D4AF37] text-[#D4AF37] rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[#D4AF37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Contact
              </span>
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
