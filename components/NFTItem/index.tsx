import React, { useEffect } from "react";
import styles from "./nftitem.module.css";
import { fromWei } from "../../utils/tokenUtils";
import { formatAddress } from "../../utils/addressUtils";
import { FetchTicker } from "../../lib/queries";
import { fetchData } from "../../lib/graphClient";



type Props = {
  data: {
    bidder: string;
    biddingEnd: string;
    description: string;
    id: string;
    imageURI: string;
    name: string;
    nftClaimed: boolean;
    numberOfBidsReceived: string;
    shbBid: string;
    shbClaimed: boolean;
    tokenURI: string;
    uriLastUpdated: string;
  };
};


const NFTItem = ({data}: Props) => {

  const [imgUrl, setImgUrl] = React.useState<string>("");
  const {id, name, imageURI, shbBid, numberOfBidsReceived, biddingEnd, bidder} = data;

  console.log(data)
  
  useEffect(() => {
    try {
      fetchData(FetchTicker, {id}).then(res => {
        // console.log(res.ticker);
        // setImgUrl(res.ticker.imageUrl);
      });
    } catch (error) {

    }



  }, [])
  // console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{id}</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.property}>
          <div className={styles.propertyName}>Bid Count:</div>
          <div className={styles.propertyValue}> {numberOfBidsReceived}</div>
        </div>
        <div className={styles.property}>
          <div className={styles.propertyName}>Winning Big:</div>
          <div className={styles.propertyValue}> {parseInt(fromWei(shbBid))} SHB</div>
        </div>
        <div className={styles.property}>
          <div className={styles.propertyName}>End Block:</div>
          <div className={styles.propertyValue}>{biddingEnd}</div>
        </div>
        <div className={styles.property}>
          <div className={styles.propertyName}>Winner:</div>
          <div className={styles.propertyValue}> {formatAddress(bidder)}</div>
        </div>
        <div className={styles.property}>
          <div className={styles.propertyName}>Time Left:</div>
          <div className={`${styles.propertyValue} ${styles.finished}`}>
       
            Finished
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTItem;
