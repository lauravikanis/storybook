import "./player.css";
import { createElement } from "../../utils/elements";

export const createControlElement = (control) => {
  // hier fehlt noch was?
  const controlElement = createElement("div", {
    className: "Controls",
    children: [
      createElement("div", {
        className: "firstRow",
        children: [
          createElement("button", {
            className: "rewind",
            // children: [createElement[rewindElement],
            onclick: () => {
              alert("rewind me!");
            },
            children: [
              createElement("h5", {
                innerText: "Play",
              }),
            ],
          }),
          createElement("button", {
            className: "play",
            // children: [playElement],
            onclick: () => {
              alert("play!");
            },
            children: [
              createElement("h5", {
                innerText: "Rewind",
              }),
            ],
          }),
          createElement("button", {
            className: "forward",
            // children: [forwardElement],
            onclick: () => {
              alert("forward me!");
            },
            children: [
              createElement("h5", {
                innerText: "forward",
              }),
            ],
          }),
        ],
      }),
      createElement("div", {
        className: "secondRow",
        children: [
          createElement("button", {
            className: "subhead",
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
            className: "subhead",
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
            className: "subhead",
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
            className: "rewind",
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
            className: "rewind",
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
