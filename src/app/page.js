import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Title from "@/components/body/Title";
import Product from "@/components/body/Product";
import Footer from "@/components/footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";

async function getData(){
  const url = 'https://fakestoreapi.com/products'
  const res = await fetch(url);
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <Header />
      <Title />
      <Suspense fallback={<Loading />}>
        <Product data={data} />
      </Suspense>
      <Footer />
    </main>
  );

}
