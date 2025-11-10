import React from "react";
import NavMenu from "./nav-menu";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavMenu />
      <main>{children}</main>
    </div>
  );
}
