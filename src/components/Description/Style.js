import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-width: 250px;
  padding: 10px 0;
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

export const TitleIn = styled(Link)`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const TitleOut = styled.a`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;
