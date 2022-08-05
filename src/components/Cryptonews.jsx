import React from "react";
import { useState } from "react";
import { useGetNewsQuery } from "../services/coinnewsapi";
import { CategoryScale } from "chart.js";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
const { Text, Title } = Typography;

const Cryptonews = ({ simplified }) => {
  const count = simplified ? 6 : 12; //--> 10 to display in home page and 100 to display on crypto page
  const category = "cryptocurrencies";
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  const { data: cryptoNews, isFetching } = useGetNewsQuery({ category, count });
  if (isFetching) return "loading...";
  console.log(cryptoNews?.value);
  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} />
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cryptonews;
