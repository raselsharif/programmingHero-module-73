import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link href={"/about1"}>
        <button className="border px-3 py-2 rounded-md">about one</button>
      </Link>
    </div>
  );
}
