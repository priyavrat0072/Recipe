import headerImage from "../assets/headerImage.png"

const Header = () => {
  return (
    <div >
      <img src={headerImage} alt="Header Background" className="w-full h-32 sm:h-48 md:h-auto object-cover"/>
    </div>
  );
};
export default Header;
