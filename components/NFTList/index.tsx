import React, { useEffect, useState } from "react";
import NFTItem from "../NFTItem";
import styles from "./nftlist.module.css";
import { fetchData } from "../../lib/graphClient";
import { FetchTickers } from "../../lib/queries";
import { Skeleton, Stack } from "@mui/material";
import Loader from '../../components/Loader'
import { toast } from "react-toastify";

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
      toast.error("An error occurred with fetching")
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
      {nfts.error && <div>An error occurred</div>}
        {!nfts.loading && nfts.data && nfts.data.map((nft, i) => (
          <NFTItem data={nft}  key={i} />
        ))}

  

    </div>
  );
};

export default NFTList;
