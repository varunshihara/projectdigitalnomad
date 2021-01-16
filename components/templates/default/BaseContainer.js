import Head from "next/head";
import Link from "next/link";

const BaseContainer = (props) => {
  return (
    <div className="container">
      <Head>
        <title>Project Digital Nomad | Varun Shihara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header">
        <img src="/logo/pdn-logo-wtext-web200.png" className="logo"></img>
        <nav>
          <ul>
            <li>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {props.children}
    </div>
  );
};

export default BaseContainer;
