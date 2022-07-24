import { React, useState } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/coinrankingapi";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoCoins, isLoading } = useGetCryptosQuery(count); // renamed data to cryptoCoins
  const [coins, setCoins] = useState(cryptoCoins?.data?.coins);
  if (isLoading) return "Loading...";
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price:{millify(currency.price)}</p>
                <p>MarketCap:{millify(currency.marketCap)}</p>
                <p>DailyChange:{millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Cryptocurrencies;
