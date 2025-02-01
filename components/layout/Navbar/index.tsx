"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import MobileMenu from "./MobileMenu";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  return (
    <nav className="bg-white py-4 border-b border-border sticky top-0 z-[9999]">
      <Container>
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="logo relative z-[101] cursor-pointer">
            <Logo />
          </Link>

          {/* Mega Menu */}
          <div className="hidden lg:flex items-center">
            <MegaMenu />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
}
