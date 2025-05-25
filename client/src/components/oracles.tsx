import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Search, History, Trash2 } from "lucide-react";
import { oracleData } from "@/lib/game-data";
import { useGameData } from "@/hooks/use-game-data";

export default function Oracles() {
  const [selectedOracle, setSelectedOracle] = useState<keyof typeof oracleData>('action');
  const [currentResult, setCurrentResult] = useState<{
    type: string;
    roll: number;
    result: string;
    timestamp: string;
  } | null>(null);

  const { gameData, addOracleConsultation, clearOracleHistory } = useGameData();

  const oracleNames = {
    action: 'Oráculo 1: Acción',
    theme: 'Oráculo 2: Tema',
    region: 'Oráculo 3: Región',
    location: 'Oráculo 4: Lugar',
    coastalLocation: 'Oráculo 5: Lugar en aguas costeras',
    locationDescriptor: 'Oráculo 6: Descriptor de lugar',
    settlementName: 'Oráculo 7: Nombre de asentamiento',
    settlementNameQuick: 'Oráculo 8: Generador rápido de nombres',
    settlementTrouble: 'Oráculo 9: Problema de asentamiento',
    characterRole: 'Oráculo 10: Rol de personaje',
    characterGoal: 'Oráculo 11: Propósito de personaje',
    characterDescriptor: 'Oráculo 12: Descriptor de personaje',
    ironlanderNamesA: 'Oráculo 13a: Nombres del pueblo del Hierro',
    ironlanderNamesB: 'Oráculo 13b: Nombres del pueblo del Hierro',
    elfNames: 'Oráculo 14: Nombres élficos',
    otherNames: 'Oráculo 15: Otros nombres',
    combatAction: 'Oráculo 16: Acción de combate',
    mysticBacklash: 'Oráculo 17: Consecuencias artes místicas',
    plotTwist: 'Oráculo 18: Giro argumental destacado',
    challengeRank: 'Oráculo 19: Nivel de desafío'
  };

  const consultOracle = () => {
    const roll = Math.floor(Math.random() * 100) + 1;
    let result: string;
    
    if (selectedOracle === 'settlementNameQuick') {
      // Oráculo 8: Generador rápido requiere dos tiradas
      const firstRoll = Math.floor(Math.random() * 100) + 1;
      const secondRoll = Math.floor(Math.random() * 100) + 1;
      const oracleObj = oracleData[selectedOracle] as { firstTerm: string[]; secondTerm: string[] };
      const firstIndex = Math.floor((firstRoll - 1) / (100 / oracleObj.firstTerm.length));
      const secondIndex = Math.floor((secondRoll - 1) / (100 / oracleObj.secondTerm.length));
      const firstName = oracleObj.firstTerm[firstIndex] || oracleObj.firstTerm[0];
      const secondName = oracleObj.secondTerm[secondIndex] || oracleObj.secondTerm[0];
      result = `${firstName} ${secondName} (${firstRoll}/${secondRoll})`;
    } else if (selectedOracle === 'settlementName') {
      // Oráculo 7: Nombre de asentamiento (categorías con ejemplos específicos)
      const oracleObj = oracleData[selectedOracle] as {
        paisaje: string[]; edificio: string[]; criatura: string[]; 
        historico: string[]; viejo_mundo: string[]; estacional: string[]; otra_cosa: string[]
      };
      
      let categoryName = '';
      let categoryArray: string[] = [];
      
      if (roll <= 15) {
        categoryName = 'Característica del paisaje';
        categoryArray = oracleObj.paisaje;
      } else if (roll <= 30) {
        categoryName = 'Edificio fabricado por humanos';
        categoryArray = oracleObj.edificio;
      } else if (roll <= 45) {
        categoryName = 'Una criatura';
        categoryArray = oracleObj.criatura;
      } else if (roll <= 60) {
        categoryName = 'Un suceso histórico';
        categoryArray = oracleObj.historico;
      } else if (roll <= 75) {
        categoryName = 'Palabra del Viejo Mundo';
        categoryArray = oracleObj.viejo_mundo;
      } else if (roll <= 90) {
        categoryName = 'Aspecto estacional/ambiental';
        categoryArray = oracleObj.estacional;
      } else {
        categoryName = 'Otra cosa';
        categoryArray = oracleObj.otra_cosa;
      }
      
      const exampleIndex = Math.floor(Math.random() * categoryArray.length);
      const example = categoryArray[exampleIndex];
      result = `${example} (${categoryName})`;
    } else if (selectedOracle === 'otherNames') {
      // Oráculo 15: Otros nombres (tres categorías)
      const categories = ['gigantes', 'trolls', 'varus'];
      const categoryRoll = Math.floor(Math.random() * 3);
      const selectedCategory = categories[categoryRoll];
      const oracleObj = oracleData[selectedOracle] as { gigantes: string[]; trolls: string[]; varus: string[] };
      const categoryArray = oracleObj[selectedCategory as keyof typeof oracleObj];
      const index = Math.floor((roll - 1) / (100 / categoryArray.length));
      const name = categoryArray[index] || categoryArray[0];
      result = `${name} (${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)})`;
    } else {
      // Oráculos normales
      const oracleArray = oracleData[selectedOracle] as string[];
      const index = Math.floor((roll - 1) / (100 / oracleArray.length));
      result = oracleArray[index] || oracleArray[0];
    }
    
    const consultation = {
      type: oracleNames[selectedOracle],
      roll,
      result,
      timestamp: new Date().toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
    
    setCurrentResult(consultation);
    addOracleConsultation(consultation);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Oracle Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="font-cinzel flex items-center">
            <Sparkles className="mr-2 text-purple-500" />
            Oráculos de Ironsworn
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Oráculo
            </label>
            <Select value={selectedOracle} onValueChange={(value) => setSelectedOracle(value as keyof typeof oracleData)}>
              <SelectTrigger className="focus:ring-purple-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(oracleNames).map(([key, name]) => (
                  <SelectItem key={key} value={key}>{name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button 
            onClick={consultOracle} 
            className="w-full bg-purple-500 text-white py-3 font-bold hover:bg-purple-600"
          >
            <Search className="mr-2" />
            Consultar Oráculo
          </Button>
        </CardContent>
      </Card>

      {/* Oracle Result */}
      <Card>
        <CardHeader>
          <CardTitle className="font-cinzel">Resultado del Oráculo</CardTitle>
        </CardHeader>
        <CardContent>
          {currentResult ? (
            <div className="space-y-4 fade-in">
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-purple-600 mb-2">
                    {currentResult.roll}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    Tirada: {currentResult.type}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800 mb-2">
                  {currentResult.result}
                </div>
                <div className="text-sm text-gray-500">
                  {currentResult.timestamp}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 italic py-8">
              Selecciona un oráculo y consulta para ver el resultado
            </div>
          )}
        </CardContent>
      </Card>

      {/* Oracle History */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-cinzel flex items-center">
              <History className="mr-2 text-purple-500" />
              Resultados Recientes
            </CardTitle>
            {gameData.oracleHistory.length > 0 && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearOracleHistory}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Limpiar
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {gameData.oracleHistory.length === 0 ? (
              <div className="text-center text-gray-500 italic py-4">
                No hay consultas recientes
              </div>
            ) : (
              gameData.oracleHistory.map((consultation, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{consultation.result}</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {consultation.type}
                    </Badge>
                    <Badge variant="secondary" className="text-xs font-mono">
                      {consultation.roll}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {consultation.timestamp}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
