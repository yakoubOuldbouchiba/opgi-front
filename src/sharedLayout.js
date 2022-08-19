import UpperBar from "./compenents/upperBar/upperBar";
import NavBar from "./compenents/navBar/navBar";
import Section from "./compenents/section/section";
import Footer from "./compenents/footer/footer";
const SharedLayout = () => {
  return (
    <div className="container">
      <header>
        <UpperBar />
        <NavBar />
        <Section />
        <Footer />
      </header>
    </div>
  );
};
export default SharedLayout;
