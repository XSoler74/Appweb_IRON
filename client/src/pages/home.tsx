import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, User, Dices, Sparkles, Scroll, BookOpen, Save } from "lucide-react";
import CharacterSheet from "@/components/character-sheet";
import DiceRoller from "@/components/dice-roller";
import Oracles from "@/components/oracles";
import Moves from "@/components/moves";
import Journal from "@/components/journal";
import DataManager from "@/components/data-manager";
import { useGameData } from "@/hooks/use-game-data";

type TabType = 'character' | 'dice' | 'oracles' | 'moves' | 'journal' | 'data';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('character');
  const { gameData } = useGameData();

  const tabs = [
    { id: 'character' as TabType, label: 'Personaje', icon: User },
    { id: 'dice' as TabType, label: 'Dados', icon: Dices },
    { id: 'oracles' as TabType, label: 'Oráculos', icon: Sparkles },
    { id: 'moves' as TabType, label: 'Movimientos', icon: Scroll },
    { id: 'journal' as TabType, label: 'Diario', icon: BookOpen },
    { id: 'data' as TabType, label: 'Datos', icon: Save },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'character':
        return <CharacterSheet />;
      case 'dice':
        return <DiceRoller character={gameData.character} />;
      case 'oracles':
        return <Oracles />;
      case 'moves':
        return <Moves character={gameData.character} />;
      case 'journal':
        return <Journal />;
      case 'data':
        return <DataManager />;
      default:
        return <CharacterSheet />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="steel-bg text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Shield className="text-yellow-300 w-6 h-6" />
              <h1 className="font-cinzel font-bold text-xl">Ironsworn: Lodestar</h1>
            </div>
            <div className="flex space-x-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? 'iron-bg text-white hover:bg-amber-700'
                        : 'text-white hover:bg-slate-600'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {tab.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {renderTabContent()}
      </div>
    </div>
  );
}
