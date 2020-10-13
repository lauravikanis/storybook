import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const beatIt = () =>
  createTrackElement({
    title: "Beat It",
    artist: "Michael Jackson",
    imgSrc:
      "https://i.pinimg.com/564x/2c/7d/99/2c7d99b45744abba70aea6be9127ea34.jpg",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Cambo/Chilled_Beats/Cambo_-_02_-_Warm.mp3",
  });

export const thriller = () => createTrackElement("Thriller", "Michael Jackson");

export const dontStop = () =>
  createTrackElement("Don't Stop (Till You Get Enough)", "Michael Jackson");

export const billieJean = () =>
  createTrackElement("Billie Jean", "Michael Jackson");

// export const thriller = () =>
//   createTrackElement({ title: "ABC", artist: "sfdsj", imgSrc: "fd" });
