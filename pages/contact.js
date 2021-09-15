import React from "react";
import Head from "next/head";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <div className="website">
      <Head>
        <title>Dubari - Contact Us</title>
        <meta
          title="description"
          content="Dubari - an assamese literature website"
        />
      </Head>
      <NavBar />
      <div className="contactInner">
        <h4>
          শ্ৰী সতীন্দ্ৰ কুমাৰ নাথ দেৱৰ সাহিত্যৰাজিক সামৰি দুবৰি নামেৰে এটি
          ৱেবচাইট মুকলি কৰা হৈছে। এই ৱেবছাইটৰ জৰিয়তে তেওঁৰ সাহিত্যৰ প্ৰকৃতি,
          সমাজ - জীৱনৰ ছবি খন দাঙি ধৰাটো আমাৰ অনন্য প্ৰয়াস। সদাসয় পাঠক সমাজে
          উষ্ম আদৰ সাদৰেৰে এই প্ৰয়াসক আকোৱালি লব বুলি আশা ৰাখিলোঁ। এই ৱেবছাইটৰ
          ধাৰাবাহিকতা দৈনিক ব্লগ লিখনিৰ মাজেৰে শৃঙ্খলাৱদ্ধ কৰা হব। মোৰ দেউতাৰ
          দুবৰি শীর্ষক এই ৱেবছাইটৰ ৰ প্ৰতি আপোনালোকৰ মৰম চেনেহ আৰু সহাঁৰি বিচাৰি
          এই বিনম্ৰ নিবেদন আগবঢ়ালো।
          <br />
          <br />
          <p>ধন্যবাদ।</p>
        </h4>
        <div className="contactDetails">
          <h3>Bibhuti Bikram Nath</h3>
          <p>S/O Satindra Kumar Nath</p>
          <p>Sapmari, Morigaon, Assam</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
