import { icons } from "./../assets/icons/icon";

const sidebarItem = [
  { id: 1, title: "Home", icon: icons.home, route: "/" },
  { id: 2, title: "Launchpads", icon: icons.rocket, route: "/launchpads" },
  { id: 3, title: "Airdrop List", icon: icons.airdrop, route: "/airdrops" },
  {
    id: 4,
    title: "Private Sales",
    icon: icons.private_sale,
    route: "/private-sales",
  },
  {
    id: 5,
    title: "Buy Crypto / Fiat",
    icon: icons.buy_crypto,
    route: "/buy-crypto",
  },
  { id: 6, title: "XL-Lock", icon: icons.xl_lock, route: "/xl-lock" },
  { id: 7, title: "KYC & Audit", icon: icons.kyc, route: "/kyc-audit" },
  { id: 8, title: "Docs", icon: icons.docs, route: "/docs" },
];

export default sidebarItem;
