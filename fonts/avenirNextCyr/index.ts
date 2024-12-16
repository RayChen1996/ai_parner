import localFont from "next/font/local";

const avenirNextCyr = localFont({
  src: [
    {
      path: "./AvenirNextCyr-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./AvenirNextCyr-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./AvenirNextCyr-UltraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./AvenirNextCyr-UltraLightIt.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./AvenirNextCyr-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./AvenirNextCyr-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./AvenirNextCyr-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./AvenirNextCyr-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./AvenirNextCyr-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./AvenirNextCyr-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./AvenirNextCyr-Demi.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./AvenirNextCyr-DemiItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./AvenirNextCyr-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./AvenirNextCyr-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    // 缺失800
    {
      path: "./AvenirNextCyr-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./AvenirNextCyr-HeavyItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-avenir-next",
});

export default avenirNextCyr;
