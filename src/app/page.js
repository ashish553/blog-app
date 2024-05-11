// 'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { list } from "@vercel/blob";
import { cookies } from "next/headers";
// import { useSelector } from "react-redux";
import Shimmer from './Components/CardShimmer'

export default async function Home() {
  // const blogDetailsFromStore = useSelector(store=>store.blogDetails)
  // console.log(blogDetailsFromStore);
  // const response = await list()
  // console.log(response);
  // console.log(cookies().get('usr_profile'));
  return (
    // <ReduxProvider>
      <main className={styles.main}>
        <h1 className="mt-5 text-3xl text-white text-center font-light">Home</h1>
      </main>
    // </ReduxProvider>
  );
}
