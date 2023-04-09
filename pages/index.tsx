import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance, useConnect } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";
import Hero from "../components/Hero/Hero";
import Login from "../components/Login";
import NFTItem from "../components/NFTItem";
import NFTList from "../components/NFTList";

const Home: NextPage = () => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [{ data: accountData, loading: accountLoading }] = useAccount();
  const [{ data: balanceData, loading: balanceLoading }] = useBalance({
    addressOrName: accountData?.address,
    watch: true,
  });
  const [
    { data: connectData, loading: connectDataLoading, error },
    disconnect,
  ] = useConnect();

  return (
    <>
      <WalletOptionsModal
        open={showWalletOptions}
        setOpen={setShowWalletOptions}
      />

      <Layout
        showWalletOptions={showWalletOptions}
        setShowWalletOptions={setShowWalletOptions}
      >
        {connectData.connected && (
          <>
            <Hero />
            <NFTList />
          </>
        )}

        {!connectData.connected && <Login />}
      </Layout>
    </>
  );
};

export default Home;
