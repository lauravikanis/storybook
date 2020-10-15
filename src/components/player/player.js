/* <div>
  <div>
    <button class="backward">
      <img></img>
    </button>
    <button class="Play">
      <img></img>
    </button>
    <button class="forward">
      <img></img>
    </button>
  </div>
  ;
  <div>
    <img></img>
    <div class="playlist"></div>
    <img></img>
    <div class="shuffle"></div>
    <img></img>
    <div class="repeat"></div>
    <img></img>
    <div class="EQ"></div>
    <img></img>
    <div class="favourites"></div>
  </div>
</div>; */

import { createElement } from "../../utils/elements";
export const createControlElement = (control) => {
  // hier fehlt noch was?
  const controlElement = createElement("div", {
    className: "upperrow",
    children: [
      createElement("button", {
        className: "rewind",
        innerText: "rewindbutton",
        // children: [createElement[rewindElement],
        onclick: () => {
          alert("rewind me!");
        },
        children: [
          createElement("h5", {
            innerText: "Rewind",
          }),
        ],
      }),
      createElement("button", {
        className: "play",
        innerText: "playbutton",
        // children: [playElement],
        onclick: () => {
          alert("play!");
        },
      }),
      createElement("button", {
        className: "forward",
        innerText: "forwardbutton",
        // children: [forwardElement],
        onclick: () => {
          alert("forward me!");
        },
      }),
    ],
  });
  return controlElement;
};
