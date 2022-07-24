import { React, useState } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/coinrankingapi";

const Cryptocurrencies = () => {
  const { data, isLoading } = useGetCryptosQuery();
  const [coins, setCoins] = useState(data?.data?.coins);
  console.log(coins);
  return <div>Cryptocurrencies</div>;
};
export default Cryptocurrencies;
