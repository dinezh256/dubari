import React from "react";
import clientImage from "./../../assets/images/clientImage.png";
import clientBg from "./../../assets/images/userBg.png";
import book from "./../../assets/images/book.jpg";
import Footer from "../footer";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="homeWrapper">
      <div className="row home">
        <div className="col-sm clientImageWrapper">
          <div className="imageNameWrapper">
            <Image
              src={clientBg}
              className="clientBackground"
              alt="client Background"
              draggable={false}
              priority={true}
            />
            <div className="clientImageOuter">
              <Image
                alt="Satindra Kumar Nath"
                src={clientImage}
                className="clientImage"
                draggable={false}
                priority={true}
              />
              <div className="innerText">
                <div className="textElements">
                  <h1 className="imageName">Satindra</h1>
                  <h1 className="imageSurname">Kumar&nbsp;Nath</h1>
                  <div className="imageGradient" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm clientQuoteWrapper">
          <h1 className="landingPageQuote">
            <span>❝</span>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>মোৰ গীতৰ লহৰে লহৰে দুৰ্জয় চাকনৈয়া</p>
            <p>কণ্ঠত বাজে ব্ৰজনিনাদ দানৱ ধ্বংস কৰা</p>
            <p>লৌহ মানৱ গঢ়ি পিতি দিম গীতৰ ছন্দে ছন্দে</p>
            <p>শোষক অসুৰ কৰিম নিধন যদি আছে চোকে কোণে ।</p>
          </h1>
          {/* <h5 className="connectBtn">
            <span>অধিক পঢ়ক</span>
          </h5> */}
        </div>
      </div>
      <div className="about" id="about">
        <div className="image">
          <Image src={book} draggable={false} alt="books" priority={true} />
        </div>
        <div className="text">
          <div className="textInner">
            <h1>আমাৰ সবিশেষ</h1>
            <h2>
              হৃদয়ৰ গহনতম কোণৰ অনুভূতিবোৰৰ প্ৰকাশেই কবিতা। জীৱন নদীৰ দুই পাৰত
              উঠা হাঁহি- কান্দোনৰ কত যে লহৰে সংসাৰৰ পৰিভাষাকে বুজাই দিয়ে। মোৰ
              জীৱনৰ তিতা, কেঁহা আৰু ৰসাল অভিজ্ঞতাক মই সযতনে ৰাখিছোঁ।ইয়ে মোক
              প্ৰেৰণাও দিয়ে, জীয়াই থকাৰ পথো সূচায়। কিছু চালুকীয়া ভাৱানুভূতি,
              কিছু প্ৰগতিশীল চেতনা আৰু কিছুমান চিনাকি চিনাকি লগা অন্তৰৰ নিচেই
              কাষৰ ভাৱ বিলাক । ভাষা আৰু ভাৱৰ এই সংগমময় অনুভূতিবোৰকে প্ৰকাশ কৰাৰ
              দিহা কৰা হৈছে।
            </h2>
            {/* <h2>
            That which arises from the feelings of the deepest corners of the
            heart is called poetry. Poetry flows amidst the manifold waves of
            life, in between laughter and sorrow, success and failure, hopes and
            expectations. I have let poetry manifest the bitter, sweet and sour
            experiences of my life. It gives me motivation to carry on and the
            will to live in this beautiful world. Poetry has influenced my
            entire life, preserving the softest of the delicate memories to the
            strongest of the feelings. It provided me room for development and
            the necessity to embrace the world, meet new souls. For me, poetry
            is the straightest line drawn between the feel of the mind and the
            language we speak. Hereby I put forward my humble intentions towards
            gratifying the field of poetry and I hope you will find it
            worthwhile.
          </h2> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
