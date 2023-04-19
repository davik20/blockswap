import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import NFTList from './index';
import { fetchData } from '../../lib/graphClient';

// Mock the fetchData function from graphClient
jest.mock('../../lib/graphClient', () => ({
  fetchData: jest.fn(),
}));

const mockData = {
    bidder: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    biddingEnd: '1234567890',
    description: 'A limited edition NFT featuring a unique digital artwork.',
    id: '1',
    imageURI: 'https://example.com/image.png',
    name: 'Exclusive Digital Artwork',
    nftClaimed: false,
    numberOfBidsReceived: '5',
    shbBid: '1000000000000000000', // 1 SHB in wei
    shbClaimed: false,
    tokenURI: 'https://example.com/token.json',
    uriLastUpdated: '2023-01-01T00:00:00.000Z',
  };
  
  // Use mockData as a prop in the NFTItem component
  // <NFTItem data={mockData} />
  
const mockTickers = [
    {
        bidder: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        biddingEnd: '1234567890',
        description: 'A limited edition NFT featuring a unique digital artwork.',
        id: '1',
        imageURI: 'https://example.com/image.png',
        name: 'Exclusive Digital Artwork',
        nftClaimed: false,
        numberOfBidsReceived: '5',
        shbBid: '1000000000000000000', // 1 SHB in wei
        shbClaimed: false,
        tokenURI: 'https://example.com/token.json',
        uriLastUpdated: '2023-01-01T00:00:00.000Z',
      }
  // Add more mock ticker data if needed
];

describe('NFTList component', () => {
  test('renders loading state initially', () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ tickers: mockTickers });


    render(<NFTList />);
    const loaders = screen.getAllByText(/Loading/i);
    expect(loaders.length).toBe(4);
  });

  test('renders NFT items after fetching data', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Fetching error'));

    render(<NFTList />);
    await waitForElementToBeRemoved(() => screen.queryAllByText(/Loading/i));

    const nftItems = screen.getAllByTestId('nft-item');
    expect(nftItems.length).toBe(mockTickers.length);
  });

  test('renders error message when fetching fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch data'));

    render(<NFTList />);
    await waitForElementToBeRemoved(() => screen.queryAllByText(/Loading/i));

    const errorMessage = screen.getByText(/An error occurred/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
