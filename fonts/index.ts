import {
  Noto_Sans_TC,
  Noto_Sans_Mono,
  Noto_Serif_TC,
  Inter,
  Roboto,
  Shrikhand,
  Saira_Extra_Condensed,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const saira_extra_condensed = Saira_Extra_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-saira-extra-condensed",
  display: "swap",
});
export const noto_sans_tc = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});
export const shrik_hand = Shrikhand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-shrik-hand",
  display: "swap",
});
export const noto_serif_tc = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-noto-serif-tc",
  display: "swap",
});

export const noto_sans_mono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-sans-mono",
  display: "swap",
});

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});
