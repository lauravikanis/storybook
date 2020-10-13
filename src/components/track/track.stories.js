import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const beatIt = () => createTrackElement("Beat It", "Michael Jackson");

export const thriller = () => createTrackElement("Thriller", "Michael Jackson");

export const dontStop = () =>
  createTrackElement("Don't Stop (Till You Get Enough)", "Michael Jackson");

export const billieJean = () =>
  createTrackElement("Billie Jean", "Michael Jackson");
