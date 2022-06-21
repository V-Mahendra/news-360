import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import notimg from "../images/notimage.png";

const NewsCat = () => {
  const params = useParams();

  const [state, setState] = useState([]);

  useEffect(() => {
    loadCategory(params.type);
  }, [params.type]);

  const loadCategory = async (name) => {
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${name}&apiKey=8fac5e612a30412c8c9f8e615f276da2`
      )
      .then((resp) => {
        setState(resp.data.articles);
        // console.log(resp.data.articles);
      });
  };


// ----------------------------------------------------------------------------
  
const str = params.type;
const str2 = str.charAt(0).toUpperCase() + str.slice(1);

// ---------------------------------------------------------------------------

  function truncate (str , n){
    return  str?.length > n ? str.substr(0, n -1 ) + "..." : str;
    //truncate operation for short the word or summary length
 }

//  --------------------------------------------------------------------------

  return (
    <Ndiv>
      <h2>{str2}</h2>
      <Wrapper>
        { state && state.map((item, index) => {
          return (

            <Card key={index}>
              <S>{item.source.name}</S>
              <h5>{item.title}</h5>
              <img src={item.urlToImage ? item.urlToImage : notimg} alt="" />
              <p>{item.description}</p>
              <h3> Author : {item.author? truncate (item.author,25): "unknown"}</h3>
              <h5>{item.publishedAt}</h5>

              <Button href={item.url} target="_blank">
                Read More ...
              </Button>
            </Card>
          );
        })}
      </Wrapper>
    </Ndiv>
  );
};

const Ndiv = styled.div`
  margin-top: 0rem;
  padding-top: 1rem ;
  background: white;
  h2 {
    background: linear-gradient(to right, #f27121, #e94057);
    padding: 0.5rem 0;
    margin: 10vh 22% 1rem 22%;
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
  background: #f8f8f8;
  cursor: available;

  -webkit-box-shadow: 0px 7px 12px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 7px 12px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 7px 12px 0px rgba(0,0,0,0.75);
  
  color: black;
  transition : all 0.3s ease-in;
  border-radius: 5px;
  box-sizing: border-box;

  &:hover {
   
    -webkit-box-shadow: 0px 7px 29px 5px rgba(120,168,245,1);
    -moz-box-shadow: 0px 7px 29px 5px rgba(120,168,245,1);
     box-shadow: 0px 7px 29px 5px rgba(120,168,245,1);

    transition : all 0.3s ease-in;
    background:  #071427;
    transform: scale(1.05);
    color: white;
  }

  h3 {
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
export default NewsCat;
