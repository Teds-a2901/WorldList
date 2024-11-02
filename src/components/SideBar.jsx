import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import style from "./Sidebar.module.css";

function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <p>List of Cities</p>
      <Footer />
    </div>
  );
}

export default SideBar;
