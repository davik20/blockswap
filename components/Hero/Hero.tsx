import React from "react";
import styles from "./hero.module.css";
import Button from "../Button";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1>Claim your SHB</h1>
      <p>
        Separate your SHB from your Brand NFT. Doing this will leave you with
        SHB and your Brand NFT in your wallet. You still maintain your naming
        rights for your Stakehouse in mainnet as long as you hold the NFT.
      </p>

      <Button
        onClick={() => {
          // route to claim page
          window.location.href = "https://help.joinstakehouse.com/en/articles/6332947-what-is-next-with-my-brand-nft";
        }}
      >
        Learn More
      </Button>
    </div>
  );
};

export default Hero;
