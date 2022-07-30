import { CategoryScale } from "chart.js";
import React from "react";
import { useGetNewsQuery } from "../services/coinnewsapi";

const Cryptonews = ({ simplified }) => {
  const count = simplified ? 10 : 100; //--> 10 to display in home page and 100 to display on crypto page
  const category = "/cryptocurrencies";
  const { data: cryptoNews, isFetching } = useGetNewsQuery(
    { category },
    { count }
  );
  if (isFetching) return "loading...";
  console.log(cryptoNews);
  return <div>Cryptonews</div>;
};

export default Cryptonews;
