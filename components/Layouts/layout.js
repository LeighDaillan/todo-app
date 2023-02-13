import Header from "./header";
import Footer from "./footer";

const Layout = function ({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
