import { Footer } from "./AppFooter";
import { Outlet } from "@tanstack/react-router";
import { Navbar } from "./AppNav";

export const AppLayout = () => {

  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <main className="container-app">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
