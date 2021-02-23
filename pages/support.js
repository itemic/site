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
        <div className="prose prose-yellow prose-lg max-w-none font-serif min-h-screen mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
          <h1>Support</h1>
          <h2>Contact</h2>
          <span>
            If you have questions, need help, or have suggestions, please get in
            touch with me. I can be reached{" "}
            <a href="mailto:terrankroft+liverail@gmail.com">via email</a> or
            contacted <a href="www.twitter.com/itemic">on Twitter</a>. I
            appreciate any and all feedback for this app. I intend on keeping it
            updated frequently with functionality I use myself.
          </span>
          <h3> Troubleshooting</h3>
          <span>
            The main issue you might have with Live Rail is that information
            isn't showing up. In these scenarios, please check your internet
            connection. If you are sure you are connected to the internet, try
            restarting the application. If that doesn't work, let me know and we
            can get in touch.
          </span>
        </div>
      </div>
    </div>
  );
}
