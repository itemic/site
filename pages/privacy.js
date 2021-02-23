import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Live Rail for HSR - Privacy</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="mx-auto my-auto bg-yellow-100">
        <div className="prose prose-lg max-w-none font-serif mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
          <h1>Privacy Policy</h1>
          <h2>Overview</h2>
          <span>
            This Privacy Policy describes how your personal information is used
            in Live Rail for HSR.
          </span>
          <h2>No Personal Information is Collected</h2>
          <span>
            I do not collect, save, use, or have access to any of your personal
            data recorded in Live Rail for HSR. You may be asked to enable
            location settings, but this is only to enable fast station shortcuts
            in the application. That information is not saved and I have no
            access to it.
          </span>
          <h2>Children's Privacy</h2>
          <span>
            My application(s) do not collect data from anyone, including
            children under the age of 13. In the case that my application(s)
            mistakenly collect identifiable information, it will be deleted
            immediately.
          </span>
          <h2>Terms and Conditions</h2>
          <span>
            By downloading and using this application, these terms and
            conditions apply to you.
          </span>
          <span>
            I intend to make this application as useful and efficient as
            possible. I may update the application frequently in order to do so.
            However, I cannot guarantee that the service may be useful or
            efficient to you and consequently am not responsible for that. The
            application relies on third-party data for some of its information.
            I accept no liabiliy for any loss, direct or indirect, you
            experience as a result of relying on this application. An internet
            connection may be necessary to receive updates to the application or
            to the data it offers. You may be charged by your internet provider
            for the data used.
          </span>
          <span>
            This Privacy Policy may be updated from time to time. You are
            advised to review it. If you have further questions about the
            Privacy Policy, please do not hesitate to contact me.
          </span>
        </div>
      </div>
    </div>
  );
}
