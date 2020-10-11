import "./settings-list.css";
import settingsAdvanced from "./advanced.html";
import settingsAudio from "./audio.html";
import settingsDisplay from "./display.html";
import settingsHeadset from "./headset.html";
import settingsLockscreen from "./lockscreen.html";
import settingsList from "./settings-list.html";
import settingsOther from "./other.html";

export default {
  title: "Components/Settings",
};

export const advanced = () => settingsAdvanced;
export const audio = () => settingsAudio;
export const display = () => settingsDisplay;
export const headset = () => settingsHeadset;
export const lockscreen = () => settingsLockscreen;
export const settingslist = () => settingsList;
export const Other = () => settingsOther;
