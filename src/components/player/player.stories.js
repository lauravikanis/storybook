import { createControlElement } from "./player";

export default {
  title: "Components/Controls",
  parameters: { layout: "centered" },
};

export const Player = () => createControlElement();

// const container = document.createElement("section");

// playlist.forEach((track) => {
//   const trackElement = createTrackElement(track);
//   container.append(trackElement);
// });
// for (let index = 0; index < playlist.length; index++) {
//   const track = playlist[index];
//   const trackElement = createTrackElement(track);
//   container.append(trackElement);
// }

//   return container;
// };
