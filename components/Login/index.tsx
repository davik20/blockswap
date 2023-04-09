import React, { useEffect } from "react";
import Button from "../Button";
import styles from "./login.module.css";
import { useAccount, useConnect } from "wagmi";
import { toast } from "react-toastify";
type Props = {};

const Login = (props: Props) => {
  const [{ data: connectData, loading: connectDataLoading, error }, connect] =
    useConnect();




  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Connect Wallet</h1>

      {connectData.connectors.map((c, index) => {
        if (c.id === "injected" || c.id === "walletConnect") {
          return (
            <Button
              key={index}
              onClick={async() => {
              let {data, error}:any =  await connect(c);
              if(data && data?.account){
                toast('Connected')
              }else {
                toast.error(error.message)
              }
       
             
              }}
              img_icon={`/images/${
                c.id === "injected" ? "metamask" : c.id
              }.svg`}
            >
              {c.name === "injected" ? "MetaMask" : c.name}
            </Button>
          );
        }
      })}

      {/* <Button 
        img_icon={"/images/metamask.svg"}
        >
            MetaMask
        </Button>
        <Button 
        img_icon={"/images/walletConnect.svg"}
        >
            Wallet Connect
        </Button> */}

      <div className={styles.p}>
       By connecting a wallet, you agree to Blockswap Labs <span>
          <a rel="noreferrer" target="_blank" href="https://lsd.joinstakehouse.com/terms">  Terms of Service
          </a>  </span>
        and acknowledge that you have read and understand the <span>
          <a
          rel="noreferrer"
            target="_blank"
            href="https://lsd.joinstakehouse.com/RiskDisclaimer"
          >
            Stakehouse Protocol Disclaime
          </a>
          r
        </span>
        .
      </div>
    </div>
  );
};

export default Login;
