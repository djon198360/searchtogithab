/* для смартфонов — 320 px, 480 px и выше;
для планшетов — 768 px и выше;
для нетбуков — 1024 px и выше;
для мониторов — 1280 px, 1600 px, 1920 px и выше. */

const size = {
  mobileS: "320",
  mobileL: "480",
  tablet: "768",
  laptop: "1024",
  desktopS: "1280",
  desktopM: "1440",
  desktop: "1920",
  desktopL: "2560",
};
export const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  desktopS: `(min-width: ${size.desktopS}px)`,
  desktopM: `(min-width: ${size.desktopM}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktopL}px)`,
};
