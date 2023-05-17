import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import notimg from "../images/notimage.png";
import { motion } from "framer-motion";

const NewsDb = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    newsData();
  }, []);

  const newsData = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=8fac5e612a30412c8c9f8e615f276da2`)
      .then(resp => {
        setNews(resp.data.articles);
        // console.log(resp.data.articles);
      });
    };

    
 
  function truncate (str , n){
    return  str?.length > n ? str.substr(0, n -1 ) + "...." : str;

    //truncate operation for short the word or summary length

 }
 
 function truncate2 (str , n){
  return  str?.length > n ? str.substr(0, n -1 ) + " " : str;

  //truncate operation for short the word or summary length

}
    // var date = new Date().toDateString();
 

  return (
    <Ndiv>
      <motion.div  
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
     >
      <h2 className="headtitle">Top ~ Headlines</h2>

      <Wrapper>
        { news && news.map((item, index ) => {
          return (
            <Card key={index}>
              <S>{item?.source.name}</S>
              <h5>{ truncate (item.title,125)}</h5>
              <img src={item.urlToImage ? item.urlToImage :  notimg} alt="" />
              <p>{item.description}</p>
              <h3> Author : {item.author ? item.author : "Unknown"}</h3>
              <h5>{truncate2 (item.publishedAt,11 )}</h5>
              <Button href={item.url} target="_blank" > Read More</Button>  
            </Card>
          );
        })}
      </Wrapper>
        </motion.div>
    </Ndiv>
  );
};



const Ndiv = styled.div`
  padding: 2rem 0;
  background: white;
  h2 {
    background: linear-gradient(to right, #f27121, #e94057);
    padding: 0.5rem 1rem;
    margin: 8vh 22% 1rem 22%;
    border-radius: 5px;
    color: white;
    text-align: center;
    font-size: 2rem;
    letter-spacing: 2px;
  }
`;
const Wrapper = styled.div`
  margin: 0rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem;
  padding: 0.5rem;
  height: 30rem;
  width: 20rem;
  
  background: linear-gradient(35deg,#0f1d39,#0770a5);
  color: white;
  border-radius: 5px;
  box-sizing: border-box;
  // box-shadow: 5px 8px 5px grey;

  &:hover {
    -webkit-box-shadow: 1px 1px 2px 1px rgba(4,51,99,0.88);
-moz-box-shadow: 1px 1px 2px 1px rgba(4,51,99,0.88);
box-shadow: 1px 1px 2px 1px rgba(4,51,99,0.88);
    background: #f8f8f8;
    transition: all 0.4s ease-in-out;
    transform: scale(1.05);
    color: black;
  }

  h3 {
    margin-top: 8px;
    font-size: 1rem;
    text-align: center;
    color: #f27121;
    height: 2rem;
  }
  h5 {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    height: 4rem;
  }
  img {
    margin-top: 0.3rem;
    width: 100%;
    height: 10rem;
  }
  p {
    font-size: 0.8rem;
    text-align: center;
    height: 6rem;
  }
`;

const Button = styled.a`
  font-weight: 600;
  color: #110022;
  text-decoration: none;
  text-align: center;

  padding: 0.5rem 2rem;
  width: 100%;
  background: linear-gradient(35deg, white, white);
  border-radius: 4px;
  border-style: none;
  position: relative;
  border: 1px solid #f27121;
  bottom: 0;
  &:hover {
    background: linear-gradient(to right, #f27121, #e94057);
    color: white;
  }
  svg {
    margin: 0 1rem;
    color: #f27121;
  }
`;

const S = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 2rem;
  width: 100%;

  background: linear-gradient(to right, #f27121, #e94057);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 5px;
`;



export default NewsDb;
