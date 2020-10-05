import "./button.css";
import buttonText from "./button-text.html";
import buttonLogo from "./button-logo.html";
import buttonPlay from "./button-play.html";

export default { title: "Components/Button" };

export const withText = () => buttonText;
export const withLogo = () => buttonLogo;
export const play = () => buttonPlay;
