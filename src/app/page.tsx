"use client";

import { useState, useEffect } from "react";
import ChampionSelector from "@/components/championSelector";

interface BasicStats {
  totalGames: number;
  totalWins: number;
  totalWinRate: number;
  createdAt: string;
}

interface ChampionStats {
  champion: string;
  totalGames: number;
  winrate: number;
  presenceRate: number;
};

interface StatDocument {
  totalGames: number;
  totalWins: number;
  totalWinRate: number;
  totalGamesWithCuratedChamp: number;
  presenceRate: {
    withCuratedChamp: number;
    withoutCuratedChamp: number;
  };
  winRate: {
    withCuratedChamp: number;
    withoutCuratedChamp: number;
  };
  championStats: ChampionStats[];
  createdAt: Date | null;
};

export default function Home() {
  const [basicStats, setBasicStats] = useState<BasicStats | null>(null);
  const [championData, setChampionData] = useState<StatDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBasicStats = async () => {
      try {
        const res = await fetch('https://api.skidhub.fr/stats/basic');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setBasicStats(data);
      } catch (error) {
        console.error("Error fetching basic stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBasicStats();
  }, []);

  const handleChampionSelection = (data: StatDocument) => {
    setChampionData(data);
    console.log("Champion data received:", data);
  };

  if (loading) {
    return <div className="min-h-screen bg-slate-950 p-4 text-white">Loading...</div>;
  }

  if (!basicStats) {
    return <div className="min-h-screen bg-slate-950 p-4 text-white">Error loading data</div>;
  }

  const loose = basicStats.totalGames - basicStats.totalWins;

  return (
    <div className="min-h-screen bg-base p-4 text-black">
      <h1 className="text-2xl font-bold mb-6 text-muted">Support Champions Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-primary text-base p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Basic Stats</h2>
          <div className="flex flex-row">
            <div className="flex flex-col mr-4">
            <span className="text-lg">Total Games:</span>
            <p className="text-3xl">{basicStats.totalGames}</p>
              </div>
              <div className="flex flex-col ml-4">
              <span>V: {basicStats.totalWins}</span>
              <span>L: {loose}</span>
            </div>
          </div>
          <h3 className="text-lg">
            Win Rate: <span style={{ color: basicStats.totalWinRate < 50 ? 'red' : basicStats.totalWinRate === 50 ? 'gray' : 'green' }}>{basicStats.totalWinRate}</span>%
          </h3>
        </div>
        <div className="bg-primary text-base p-6 rounded-lg shadow-sm">
          <h2 className="text-xl text-base font-semibold mb-2">Selected Champions Stats</h2>
          {championData ? (
            <div>
              <p>Games with selected champions: {championData.totalGamesWithCuratedChamp}</p>
              <p>Win rate with selected champions: {championData.winRate.withCuratedChamp}%</p>
              <p>Presence rate: {championData.presenceRate.withCuratedChamp}%</p>
            </div>
          ) : (
            <p className="text-base">Select champions below to see statistics</p>
          )}
        </div>
      </div>
      <ChampionSelector onSelection={handleChampionSelection} />
      {/* Floating button to /about */}
      <a href="/about" className="fixed bottom-4 right-4 mt-4 bg-secondary text-muted px-4 py-2 rounded-lg shadow hover:bg-accent hover:text-base transition duration-200">
        About this project
      </a>
    </div>
  );
}
