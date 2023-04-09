import { gql } from 'graphql-request';

export const FetchTickers = gql`
  query {
    tickers {
      id
      shbBid
      bidder
      biddingEnd
      imageURI
      description
      numberOfBidsReceived
      name
      nftClaimed
      shbClaimed
      tokenURI
      uriLastUpdated
    }
  }
`;
export const FetchTicker = gql`
  query TickerById($id: ID!) {
    ticker(id: $id) {
     tokenURI
     imageURI
    }
  }
`;



export interface Ticker {
  id: string;
  shbBid: string;
  bidder: string;
  biddingEnd: string;
}

export interface AuctionDay {
  id: string;
  numberOfTickersLeft: number;
}

