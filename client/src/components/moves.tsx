import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scroll, Map, Users, Sword, Dices } from "lucide-react";
import { movesData, GameCharacter } from "@/lib/game-data";

interface MovesProps {
  character: GameCharacter;
}

type MoveCategory = 'adventure' | 'relationship' | 'combat';

export default function Moves({ character }: MovesProps) {
  const [selectedCategory, setSelectedCategory] = useState<MoveCategory | null>(null);

  const categories = [
    {
      id: 'adventure' as MoveCategory,
      name: 'Aventura',
      description: 'Movimientos de exploración y viaje',
      icon: Map,
      color: 'text-green-500'
    },
    {
      id: 'relationship' as MoveCategory,
      name: 'Relación',
      description: 'Interacciones sociales y vínculos',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      id: 'combat' as MoveCategory,
      name: 'Combate',
      description: 'Acciones de batalla y conflicto',
      icon: Sword,
      color: 'text-red-500'
    }
  ];

  const selectedMoves = selectedCategory ? movesData[selectedCategory] : [];

  const rollMove = (move: typeof selectedMoves[0]) => {
    // This would integrate with the dice system
    console.log(`Rolling for move: ${move.name}`);
  };

  return (
    <div className="space-y-6">
      {/* Category Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="font-cinzel flex items-center">
            <Scroll className="mr-2 text-amber-600" />
            Movimientos de Ironsworn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <Button
                  key={category.id}
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 h-auto ${
                    isSelected 
                      ? 'iron-bg hover:bg-amber-700' 
                      : 'border-2 border-amber-300 hover:border-amber-500 hover:bg-amber-50'
                  }`}
                >
                  <div className="text-center">
                    <Icon className={`${category.color} mx-auto mb-2 ${isSelected ? 'text-white' : ''}`} size={32} />
                    <h3 className="font-cinzel font-bold mb-1">{category.name}</h3>
                    <p className={`text-sm ${isSelected ? 'text-white' : 'text-gray-600'}`}>
                      {category.description}
                    </p>
                  </div>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Moves List */}
      <div className="space-y-4">
        {selectedMoves.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-gray-500">
              Selecciona una categoría de movimientos para ver los detalles
            </CardContent>
          </Card>
        ) : (
          selectedMoves.map((move, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-cinzel font-bold text-lg text-gray-800">
                    {move.name}
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => rollMove(move)}
                    className="text-amber-600 hover:text-amber-700 border-amber-300 hover:border-amber-500"
                  >
                    <Dices className="w-4 h-4" />
                  </Button>
                </div>
                
                <p className="text-gray-700 mb-4">{move.description}</p>
                
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="font-medium">Características aplicables: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {move.stats.map((stat, statIndex) => (
                        <Badge key={statIndex} variant="secondary" className="text-xs">
                          {stat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex items-start space-x-2">
                      <Badge className="bg-green-100 text-green-800 text-xs font-medium shrink-0">
                        Éxito Total
                      </Badge>
                      <span className="text-sm">{move.results.strong}</span>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Badge className="bg-yellow-100 text-yellow-800 text-xs font-medium shrink-0">
                        Éxito Parcial
                      </Badge>
                      <span className="text-sm">{move.results.weak}</span>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Badge className="bg-red-100 text-red-800 text-xs font-medium shrink-0">
                        Fallo
                      </Badge>
                      <span className="text-sm">{move.results.miss}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
