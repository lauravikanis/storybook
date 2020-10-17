import "./player.css";
import forwardElementSrc from "../../assets/forward-primary.svg";
import playElementSrc from "../../assets/play-primary.svg";
import backwardElementSrc from "../../assets/backward-primary.svg";
import playlistElementSrc from "../../assets/playlist.svg";
import shuffleElementSrc from "../../assets/shuffle.svg";
import repeatElementSrc from "../../assets/repeat.svg";
import eqElementSrc from "../../assets/EQ.svg";
import favouritesElementSrc from "../../assets/favourites.svg";

import { createElement } from "../../utils/elements";

export const createControlElement = () => {
  const forwardElement = createElement("img", {
    src: forwardElementSrc,
    alt: "forward",
  });
  const playElement = createElement("img", {
    src: playElementSrc,
    alt: "play",
  });

  const backwardElement = createElement("img", {
    src: backwardElementSrc,
    alt: "backward",
  });

  const playlistElement = createElement("img", {
    src: playlistElementSrc,
    alt: "playlist",
  });

  const shuffleElement = createElement("img", {
    src: shuffleElementSrc,
    alt: "shuffle",
  });

  const repeatElement = createElement("img", {
    src: repeatElementSrc,
    alt: "repeat",
  });

  const eqElement = createElement("img", {
    src: eqElementSrc,
    alt: "equalizer",
  });

  const favouritesElement = createElement("img", {
    src: favouritesElementSrc,
    alt: "favourites",
  });

  const controlElement = createElement("div", {
    className: "Controls",
    children: [
      createElement("div", {
        className: "buttonRow__primary",
        children: [
          createElement("button", {
            className: "buttonRow_button__primary",
            onclick: () => {
              alert("rewind me!");
            },
            children: [backwardElement],
          }),
          createElement("button", {
            className: "buttonRow_button__primary",
            onclick: () => {
              alert("play!");
            },
            children: [playElement],
          }),
          createElement("button", {
            className: "buttonRow_button__primary",
            // children: [forwardElement],
            onclick: () => {
              alert("forward me!");
            },
            children: [forwardElement],
          }),
        ],
      }),
      createElement("div", {
        className: "buttonRow__secondary",
        children: [
          createElement("button", {
            className: "buttonRow_button__secondary",
            // children: [createElement[rewindElement],
            onclick: () => {
              alert("Playlist");
            },
            children: [
              playlistElement,
              createElement("h5", {
                innerText: "Playlist",
              }),
            ],
          }),
          createElement("button", {
            className: "buttonRow_button__secondary",
            // children: [createElement[rewindElement],
            onclick: () => {
              alert("Shuffle!");
            },
            children: [
              shuffleElement,
              createElement("h5", {
                innerText: "Shuffle",
              }),
            ],
          }),
          createElement("button", {
            className: "buttonRow_button__secondary",
            // children: [createElement[rewindElement],
            onclick: () => {
              alert("Repeat!");
            },
            children: [
              repeatElement,
              createElement("h5", {
                innerText: "Repeat",
              }),
            ],
          }),
          createElement("button", {
            className: "buttonRow_button__secondary",
            // children: [createElement[rewindElement],
            onclick: () => {
              alert("Equalize!");
            },
            children: [
              eqElement,
              createElement("h5", {
                innerText: "EQ",
              }),
            ],
          }),
          createElement("button", {
            className: "buttonRow_button__secondary",
            // children: [createElement[rewindElement],
            onclick: () => {
              alert("Love!");
            },
            children: [
              favouritesElement,
              createElement("h5", {
                innerText: "Favourites",
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return controlElement;
};
