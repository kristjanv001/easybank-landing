import { ReactNode } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
