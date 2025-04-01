// components/ChampionSelector.tsx
"use client";

import { useState } from "react";
import { championData } from "@/utilities/championData";

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

interface ChampionSelectorProps {
  onSelection: (champData: StatDocument) => void;
}

export default function ChampionSelector({ onSelection }: ChampionSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChampions, setSelectedChampions] = useState<string[]>([]);

  const skidChamps = [
    'Alistar',
    'Bard',
    'Blitzcrank',
    'Braum',
    'Galio',
    'Leona',
    'Maokai',
    'Nautilus',
    'Ornn',
    'Pyke',
    'Rakan',
    'Rell',
    'Renata Glasc',
    'Shen',
    'Tahm Kench',
    'Taric',
    'Thresh',
  ];

  // Filter champions based on displayName
  const filteredChampions = championData.champions.filter((champion) =>
    champion.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckboxChange = (championName: string) => {
    setSelectedChampions((prev) =>
      prev.includes(championName)
        ? prev.filter((name) => name !== championName)
        : [...prev, championName]
    );
  };

  const handleSkidSelection = async () => {

    setSelectedChampions(skidChamps);
    
    try {
      // Replace this with your actual API endpoint
      const response = await fetch('https://api.skidhub.fr/stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ champList: selectedChampions }),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data: StatDocument = await response.json();
      
      // Pass the data to the parent component using the provided callback
      onSelection(data);
      
    } catch (error) {
      console.error("Failed to fetch champion data:", error);
      alert("Failed to fetch data. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Selected champions:", selectedChampions);
    
    if (selectedChampions.length === 0) {
      alert("Please select at least one champion");
      return;
    }
    
    try {
      // Replace this with your actual API endpoint
      const response = await fetch('https://api.skidhub.fr/stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ champList: selectedChampions }),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data: StatDocument = await response.json();
      
      // Pass the data to the parent component using the provided callback
      onSelection(data);
      
    } catch (error) {
      console.error("Failed to fetch champion data:", error);
      alert("Failed to fetch data. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6 text-black">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search champions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 w-full p-2 border rounded"
        />
        {/* Scrollable container set to two columns using grid */}
        <div className="max-h-60 overflow-y-auto border p-2 mb-4 grid grid-cols-2 gap-2">
          {filteredChampions.map((champion) => (
            <div key={champion.id} className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedChampions.includes(champion.displayName)}
                  onChange={() => handleCheckboxChange(champion.displayName)}
                  className="mr-2"
                />
                <img
                  src={champion.iconUrl}
                  alt={champion.displayName}
                  className="w-6 h-6 mr-2"
                />
                {champion.displayName}
              </label>
            </div>
          ))}
          {filteredChampions.length === 0 && (
            <p className="text-gray-500 col-span-2">No champions found.</p>
          )}
        </div>
        <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
          </button>
          <button
            onClick={handleSkidSelection}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
        {`Skid's Selection`}
          </button>
        </div>
        
      </form>
      <div className="mt-4">
        <h3 className="font-semibold">{`Selected Champions`}</h3>
        <ul className="flex flex-wrap gap-2">
          {selectedChampions.map((champ) => (
            <img
              key={champ}
              src={championData.champions.find((champion) => champion.displayName === champ)?.iconUrl}
              alt={champ}
              className="w-6 h-6"
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
