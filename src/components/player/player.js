import "./player.css";
import forwardElementSrc from "../../assets/forward-primary.svg";
import playElementSrc from "../../assets/play-primary.svg";
import backwardElementSrc from "../../assets/backward-primary.svg";

import { createElement } from "../../utils/elements";

export const createControlElement = () => {
  const forwardElement = createElement("img", {
    src: forwardElementSrc,
    alt: "play",
  });
  const playElement = createElement("img", {
    src: playElementSrc,
    alt: "play",
  });

  const backwardElement = createElement("img", {
    src: backwardElementSrc,
    alt: "play",
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
              createElement("h5", {
                innerText: "Playlist",
              }),
            ],
          }),
          createElement("button", {
            className: "buttonRow_button__secondary",
            // children: [createElement[rewindElement],
            onclick: () => {
              alert("Shufle!");
            },
            children: [
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
