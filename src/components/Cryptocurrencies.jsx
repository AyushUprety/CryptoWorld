import { React, useState } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/coinrankingapi";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

const Cryptocurrencies = () => {
  const { data, isLoading } = useGetCryptosQuery();
  const [coins, setCoins] = useState(data?.data?.coins);
  console.log(coins);
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map((currency) => (
          <col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              ></Card>
            </Link>
          </col>
        ))}
      </Row>
    </>
  );
};
export default Cryptocurrencies;
