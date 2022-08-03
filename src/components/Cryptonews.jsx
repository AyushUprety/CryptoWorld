import { CategoryScale } from "chart.js";
import React from "react";
import { useState } from "react";
import { useGetNewsQuery } from "../services/coinnewsapi";

const Cryptonews = ({ simplified }) => {
  const count = simplified ? 10 : 100; //--> 10 to display in home page and 100 to display on crypto page
  const category = "/cryptocurrencies";
  const { data: cryptoNews, isFetching } = useGetNewsQuery(
    { category },
    { count }
  );
  const [news, setNews] = useState(cryptoNews?.data?.coins);
  console.log(news);

  if (isFetching) return "loading...";
  return <div>Cryptonews</div>;
};

export default Cryptonews;
