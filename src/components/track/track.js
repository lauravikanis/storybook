import playActionSrc from "../../assets/play-action.svg";
import "./track.css";

export function createTrackElement(track) {
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
  titelElement.innerText = track.title;
  titelElement.className = "title";

  const artistElement = document.createElement("p");
  artistElement.innerText = track.artist;
  artistElement.className = "artist";

  //   Bild
  const imgElement = document.createElement("img");
  imgElement.src = track.imgSrc;
  imgElement.alt = `Image of ${track.artist}`;
  imgElement.className = "track__image";

  const buttonElement = document.createElement("button");
  const playActionElement = document.createElement("img");
  playActionElement.src = playActionSrc;
  buttonElement.className = "track__button";

  const audioElement = new Audio(track.audioSrc);
  buttonElement.onclick = function () {
    // alert("TaDa!");
    audioElement.play();
  };
  // buttonElement.ondblclick = function () {
  //   // alert("This is The End");
  //   audioElement.pause;
  // };

  //   Button mit Click function
  buttonElement.append(playActionElement);
  infoElement.append(titelElement, artistElement);
  lineElement.append(infoElement, buttonElement);
  trackElement.append(imgElement, lineElement);

  return trackElement;
}
