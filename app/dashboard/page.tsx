import NavDash from "../ui/nav_dash";
import { Oswald } from "next/font/google";

const custom_font = Oswald({
  subsets: ["latin"],
  weight: "400",
});

export default async function Dashboard() {
  return (
    <p>testo</p>
  );
}
