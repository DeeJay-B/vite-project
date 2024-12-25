import headerLogo from "../assets/logo.png"; // Importing logo image from assets folder
import "./Header.css"; // Importing Header.css file for styling

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="App Logo" />
      <h1 className="header__title">Hello Vite</h1>
    </div>
  );
}
export default Header;
