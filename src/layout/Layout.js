import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Navigation />
      <Footer />
    </>
  );
}

export default Layout;
