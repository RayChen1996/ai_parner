export interface OptionsType {
  url?: string;
  name?: string;
}
export const options: OptionsType[] = [
  {
    url: "products",
    name: "產品",
  },
  {
    url: "about",
    name: "關於我們",
  },
  {
    url: "news",
    name: "最新消息",
  },
  {
    url: "faq",
    name: "FAQ",
  },
  {
    url: "contract",
    name: "聯絡我們",
  },
];
export const authOptions: OptionsType[] = [
  {
    url: "/auth",
    name: "註冊",
  },
  {
    url: "/auth",
    name: "登入",
  },
  {
    url: "/",
    name: "訂閱",
  },
];
export const footOptions: OptionsType[] = [
  {
    url: "/contract",
    name: "關於我們",
  },
  {
    url: "/products",
    name: "產品資訊",
  },
  {
    url: "/faq",
    name: "常見問題",
  },
  {
    url: "/private-policy",
    name: "隱私政策",
  },
];
