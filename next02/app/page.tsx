import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  );
}
