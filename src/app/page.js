'use client'
import Image from "next/image";
import styles from "./page.module.css";
import './assets/scss/hero.scss'
import gsap from "gsap";
import { useState, useEffect } from "react";
import Hero from './Components/Hero'
import LatestBlogs from './Components/LatestBlogs'
import { getBlogs } from "./actions";
import Join  from './Components/Join'

export default function Home() {
  return (
    // <ReduxProvider>
    <main className={styles.main}>
      <Hero />
      <LatestBlogs />
      <Join />

    </main>
    // </ReduxProvider>
  );
}
