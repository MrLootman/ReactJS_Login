import { useLocation } from "react-router-dom";
import CatImage from "../assets/images/Cat.jpg";
import DogImage from "../assets/images/Dog.jpg";

export default function LoginImage() {
  const location = useLocation();

  return (
    <img
      className="login-page_section_image"
      src={location.pathname === "/" ? CatImage : DogImage}
      alt="A draw of a cat"
    />
  );
}
