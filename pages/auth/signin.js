import React from "react";
import Head from "next/head";
import Image from "next/image";

function Signin() {
  return (
    <div>
      <Head>
        <title>Login - Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://rb.gy/y9mwtb"
        width={250}
        height={600}
        className="object-contain animate-pulse"
        alt=""
        priority
      />
    </div>
  );
}

export default Signin;
