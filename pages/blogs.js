import React from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Blog = () => {
  const poem = [
    "হিংসা-সন্ত্ৰাস নহয় কাম্য",
    "শান্তি যে আমাৰ লক্ষ্য, ",
    "নতুন প্ৰভাত আহিব পুনৰ",
    "লাগে জীৱনত ধৈৰ্য।",
    "হিংসাই আনে প্ৰতিহিংসা,",
    "সন্ত্ৰাসে মাথো ধ্বংস!",
    "অত্যাচাৰীৰ নহয় কল্যান",
    "নিবংশ হল যে কংস।",
    "সমাজ গঢ়োতা, স্বদেশ গঢ়োতা",
    "সত্যক সাৰথি কৰা,",
    "হিংসাৰে নহয় অহিংসাৰে তুমি",
    "মিলনৰ গীত গোৱা।",
    "দেশৰ গৌৰৱ জাতিৰ গৌৰৱ",
    "যদিহে বিচৰা তুমি,",
    "অহিংসা মন্ত্ৰত দীক্ষিত হোৱা",
    "উদ্ধাৰা জনমভূমি।",
    "প্ৰাপ্যখিনি পাবাই নিশ্চয়",
    "সংবিধানত যে লিখা,",
    "নোপোৱাৰ বাবে নকৰা কন্দল",
    "মানুহৰ লেখা-জোখা।",
    "ৰজা-প্ৰজা আৰু কৃষক বনুৱা",
    "আপোন নিজৰ দেশ,",
    "স্বাৰ্থ নেওচি গঢ়ি তোলা মাথো",
    "শান্তিৰ পৰিবেশ।",
    "দেখিবা তেতিয়া আঁতৰিৰ দুখ",
    "নাথাকিব চকুপানী,",
    "নিঃশেষ হব বিভেদ-বিভ্ৰাট",
    "বৰষিব সঞ্জীৱনী।",
  ];
  return (
    <div className="blogWrapper">
      <Head>
        <title>Dubari - Blog</title>
        <meta
          title="description"
          content="Dubari - an assamese literature website"
        />
      </Head>
      <NavBar />
      <div className="blogExplorer">
        <h5>
          <Link href="/blogs">blogs</Link> &gt; Adarsh
        </h5>
      </div>
      <div className="blogDiv">
        <h1>আদৰ্শ</h1>
        {poem.map((line, i) => (
          <p
            className="fadeIn"
            style={{ animationDelay: `${i * 0.035}s` }}
            key={i}
          >
            {line}
          </p>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
