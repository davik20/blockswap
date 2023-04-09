import React, { useEffect, useState } from "react";
import styles from "./walletdropdown.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LaunchIcon from "@mui/icons-material/Launch";
import CancelIcon from "@mui/icons-material/Cancel";
import { Connector, useAccount, useConnect } from "wagmi";
import { disconnect } from "@wagmi/core";
import useClickOutside from "../../hooks/useClickOutside";
import { toast } from "react-toastify";
import FadeIn from "../Transitions/FadeIn";

type Props = {
  address?: string;
};

const WalletDropdown = (props: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [{ data: accountData, loading }, disconnect] = useAccount({
    fetchEns: true,
  });
  const [{ data: connectData, loading: connectDataLoading, error }, connect] =
    useConnect();
  const dropDownRef = React.useRef(null);

  useClickOutside(dropDownRef, () => setShowDropdown(false));

  const connected = connectData?.connected;
  const connector: any = connectData.connector;

  const stuff = useConnect();


  let address = accountData?.address || "";

  useEffect(() => {
    if (connector) {
      connector.onDisconnect = () => {
        console.log("disconnecting");
      };
    }
  }, [connector]);

  return (
    <div className={styles.container}>
      {connected ? (
      <div
          className={`${styles.menu} ${showDropdown && styles.clicked}`}
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          <div className={styles.active}></div>
          <p>{`${address.slice(0, 5)}...${address.slice(36, 42)}`} </p>
          <ArrowDropDownIcon />
        </div>
      ) : (
        <div className={`${styles.menu}`}>
          <div className={styles.inactive}></div>
          <p>Not Connected</p>
        </div>
      )}

      {connected && showDropdown && (
        <div ref={dropDownRef} className={styles.dropDown}>
          <div className={styles.section}>
            <div
              onClick={() => {
                navigator.clipboard.writeText(address);
                toast("Copied to clipboard");
                setShowDropdown(false);
              }}
            >
              {" "}
              <ContentCopyIcon />
              <p>Copy address</p>
            </div>
            <div
              onClick={() => {
                window.open(
                  `https://etherscan.io/address/${address}`,
                  "_blank"
                );
                setShowDropdown(false);
              }}
            >
              <LaunchIcon />
              <p>Open in etherscan</p>
            </div>
            <i className={styles.divider}></i>
            <div
              onClick={() => {
                disconnect();
                setShowDropdown(false);
                toast.success('Disconnected')
            
              }}
            >
              <CancelIcon />
              <p>Disconnect</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletDropdown;
