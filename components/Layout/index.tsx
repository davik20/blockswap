import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import { Button, MenuDropdown, WalletOptionsModal } from "..";
import { useAccount } from "wagmi";
import styles from './layout.module.css'
import WalletDropdown from "../WalletDropdown";
interface Props {
  children: ReactNode;
  showWalletOptions: boolean;
  setShowWalletOptions: (showWalletOptions: boolean) => void;
}

export default function Layout(props: Props) {
  const { children, showWalletOptions, setShowWalletOptions } = props;

  const [{ data: accountData, loading }, disconnect] = useAccount({
    fetchEns: true,
  });



  return (
    <div>
      <Head>
        <title>NextJS wagmi</title>
        <meta name="description" content="NextJS and wagmi template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WalletOptionsModal
        open={showWalletOptions}
        setOpen={setShowWalletOptions}
      />

      <div className={styles.container}>
        <nav className={styles.nav}>
        <header className={styles.header}>
           <img src="/images/logo.webp"/>
           <WalletDropdown address="0x8AE7e397A709A26ffFEB1F43E82AcdAa112856F6"/>
          </header>
        </nav>
     
       <div className={styles.content}>
       {children}
       </div>
       
      </div>
     
    </div>
  );
}
