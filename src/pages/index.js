import { Inter } from "next/font/google";
import Menu from "@/components/Menu";
import ToolBar from "@/components/Toolbox";
import Board from "@/components/Board";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Menu />
      <ToolBar />
      <Board />
    </>
  );
}
