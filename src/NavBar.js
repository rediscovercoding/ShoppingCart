import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const navigateToShop = () => {
    navigate("/Shop");
  };
  const navigateToAboutUs = () => {
    navigate("/AboutUs");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToCart = () => {
    navigate("/Cart");
  };

  return (
    <>
      <div className="navBar">
        <div className="heading">
          <h1 onClick={navigateToHome}>Only Shirts</h1>
        </div>
        <button className="shopButton" onClick={navigateToShop}>
          Shop
        </button>
        <button className="aboutUsButton" onClick={navigateToAboutUs}>
          About Us
        </button>
        <img
          className="shoppingBag"
          src="./shoppingBags.png"
          width="100px"
          onClick={navigateToCart}
        />
      </div>
    </>
  );
}
