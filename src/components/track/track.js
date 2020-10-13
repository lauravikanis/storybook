import playActionSrc from "../../assets/play-action.svg";
import "./track.css";

export function createTrackElement(title, artist) {
  //   titel und artist wird durch konstante in klammern definiert

  const trackElement = document.createElement("div");
  trackElement.innertext - "this is a track";
  trackElement.className = "track";

  //   div für linie
  const lineElement = document.createElement("div");
  lineElement.className = "track__line";

  //   div für artist  + title
  const infoElement = document.createElement("div");
  infoElement.className = "track__info";

  const titelElement = document.createElement("h3");
  titelElement.innerText = title;
  titelElement.className = "title";

  const artistElement = document.createElement("p");
  artistElement.innerText = artist;
  artistElement.className = "artist";

  //   Bild
  const imgElement = document.createElement("img");
  imgElement.src =
    "https://i.pinimg.com/564x/2c/7d/99/2c7d99b45744abba70aea6be9127ea34.jpg";

  imgElement.alt = `Image of ${artist}`;
  imgElement.className = "track__image";

  const buttonElement = document.createElement("button");
  const playActionElement = document.createElement("img");
  playActionElement.src = playActionSrc;
  buttonElement.className = "track-button";
  buttonElement.onclick = function () {
    alert("This is not working");
  };

  //   Button mit Click function
  buttonElement.append(playActionElement);
  infoElement.append(titelElement, artistElement);
  lineElement.append(infoElement, buttonElement);
  trackElement.append(imgElement, lineElement);

  return trackElement;
}
