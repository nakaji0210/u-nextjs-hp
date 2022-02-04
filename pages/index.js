import Image from "next/image";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <p className="text-4xl text-gray-600">Homeページです</p>
    </Layout>
  );
}
