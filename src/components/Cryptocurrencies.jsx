import { React, useState, useEffect } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/coinrankingapi";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100; //--> 10 to display in home page and 100 to display on crypto page
  const { data: cryptoCoins, isFetching } = useGetCryptosQuery(count); // renamed data to cryptoCoins
  const [cryptos, setCryptos] = useState();
  const [input, setInput] = useState("");

  useEffect(() => {
    setCryptos(cryptoCoins?.data?.coins); //-> undefined returned garda don't return an errror.

    const filteredData = cryptoCoins?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptoCoins, input]);
  console.log(cryptos);
  if (isFetching) return "Fetching..."; // useFetching if you want to request multiple times. Use loading if you request only one time

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.uuid}`}>
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
