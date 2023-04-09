import React, { useEffect, useState } from "react";
import NFTItem from "../NFTItem";
import styles from "./nftlist.module.css";
import { fetchData } from "../../lib/graphClient";
import { FetchTickers } from "../../lib/queries";
import { Skeleton, Stack } from "@mui/material";
import Loader from '../../components/Loader'

type Props = {};

const NFTList = (props: Props) => {
  const [nfts, setNfts] = useState<{ data: []; loading: boolean; error: any }>({
    data: [],
    loading: false,
    error: null,
  });

  



  useEffect(() => {
    setNfts(prev => ({
      ...prev,
      loading: true,
    }));
    try {
      fetchData(FetchTickers).then(res => {
        console.log(res);
        setNfts({
        data: res.tickers,
          loading: false,
          error: null,
        });
      });
    } catch (error) {
      setNfts(prev => ({
        ...prev,
        error: error,
      }));
    }
  }, []);

  return (
    <div className={styles.container}>
      {nfts.loading &&    
      <>
         <Loader/>
         <Loader/>
         <Loader/>
         <Loader/>
         </>
}
      {nfts.error && <div>Error: {nfts.error}</div>}
        {nfts.data && nfts.data.map((nft, i) => (
          <NFTItem data={nft}  key={i} />
        ))}

  

    </div>
  );
};

export default NFTList;
