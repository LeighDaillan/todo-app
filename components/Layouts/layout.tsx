import Header from "./header";
import Footer from "./footer";

const Layout = function ({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
