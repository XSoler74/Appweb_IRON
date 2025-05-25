import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dices, Eye, HelpCircle } from "lucide-react";
import { GameCharacter } from "@/lib/game-data";

interface DiceRollerProps {
  character: GameCharacter;
}

interface DiceResult {
  actionDie: number;
  challenge1: number;
  challenge2: number;
  total: number;
  stat: string;
  modifier: number;
  result: 'strong' | 'weak' | 'miss';
  resultText: string;
}

export default function DiceRoller({ character }: DiceRollerProps) {
  const [selectedStat, setSelectedStat] = useState<keyof typeof character.stats>('edge');
  const [modifier, setModifier] = useState(0);
  const [diceResult, setDiceResult] = useState<DiceResult | null>(null);
  const [oracleResult, setOracleResult] = useState<number | string>('--');
  const [isRolling, setIsRolling] = useState(false);

  const statNames = {
    edge: 'Filo',
    heart: 'Corazón',
    iron: 'Hierro',
    shadow: 'Sombra',
    wits: 'Astucia'
  };

  const rollActionDice = async () => {
    setIsRolling(true);
    
    // Simulate dice animation delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const actionDie = Math.floor(Math.random() * 6) + 1;
    const challenge1 = Math.floor(Math.random() * 10) + 1;
    const challenge2 = Math.floor(Math.random() * 10) + 1;
    
    const statValue = character.stats[selectedStat];
    const total = actionDie + statValue + modifier;
    
    let result: 'strong' | 'weak' | 'miss';
    let resultText: string;
    
    if (total > challenge1 && total > challenge2) {
      result = 'strong';
      resultText = 'Éxito Total';
    } else if (total > challenge1 || total > challenge2) {
      result = 'weak';
      resultText = 'Éxito Parcial';
    } else {
      result = 'miss';
      resultText = 'Fallo';
    }
    
    setDiceResult({
      actionDie,
      challenge1,
      challenge2,
      total,
      stat: statNames[selectedStat],
      modifier,
      result,
      resultText
    });
    
    setIsRolling(false);
  };

  const rollOracle = () => {
    const result = Math.floor(Math.random() * 100) + 1;
    setOracleResult(result);
  };

  const rollYesNo = () => {
    const result = Math.random() < 0.5 ? 'No' : 'Sí';
    setOracleResult(result);
  };

  const getResultColor = (result: 'strong' | 'weak' | 'miss') => {
    switch (result) {
      case 'strong': return 'text-green-600';
      case 'weak': return 'text-yellow-600';
      case 'miss': return 'text-red-600';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Action Dice */}
      <Card>
        <CardHeader>
          <CardTitle className="font-cinzel flex items-center">
            <Dices className="mr-2 text-amber-600" />
            Tirada de Acción
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dice-stat">Característica</Label>
              <Select value={selectedStat} onValueChange={(value) => setSelectedStat(value as keyof typeof character.stats)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(statNames).map(([key, name]) => (
                    <SelectItem key={key} value={key}>{name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="dice-modifier">Modificador</Label>
              <Input
                id="dice-modifier"
                type="number"
                value={modifier}
                onChange={(e) => setModifier(parseInt(e.target.value) || 0)}
                className="focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>
          <Button 
            onClick={rollActionDice} 
            className="w-full iron-bg text-white py-4 text-lg font-bold hover:bg-amber-700 transition-colors"
            disabled={isRolling}
          >
            <Dices className={`mr-2 ${isRolling ? 'dice-animation' : ''}`} />
            {isRolling ? 'Tirando...' : 'Tirar Dados'}
          </Button>
        </CardContent>
      </Card>

      {/* Dice Result */}
      <Card>
        <CardHeader>
          <CardTitle className="font-cinzel">Resultado</CardTitle>
        </CardHeader>
        <CardContent>
          {diceResult ? (
            <div className="text-center space-y-4 fade-in">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold">{diceResult.actionDie}</div>
                  <div className="text-sm text-gray-600">Dado de Acción</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold">{diceResult.challenge1}</div>
                  <div className="text-sm text-gray-600">Desafío 1</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold">{diceResult.challenge2}</div>
                  <div className="text-sm text-gray-600">Desafío 2</div>
                </div>
              </div>
              <div className="text-center border-t pt-4">
                <div className="text-sm text-gray-600 mb-2">
                  {diceResult.actionDie} + {character.stats[selectedStat]} ({diceResult.stat}) + {diceResult.modifier} = {diceResult.total}
                </div>
                <Badge className={`text-xl font-bold ${getResultColor(diceResult.result)}`} variant="outline">
                  {diceResult.resultText}
                </Badge>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 italic py-8">
              Haz una tirada para ver los resultados
            </div>
          )}
        </CardContent>
      </Card>

      {/* Oracle Dice */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="font-cinzel flex items-center">
            <Eye className="mr-2 text-purple-500" />
            Dados del Oráculo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              onClick={rollOracle} 
              className="bg-purple-500 text-white py-3 font-bold hover:bg-purple-600"
            >
              <Dices className="mr-2" />
              Tirar d100
            </Button>
            <Button 
              onClick={rollYesNo} 
              className="bg-blue-500 text-white py-3 font-bold hover:bg-blue-600"
            >
              <HelpCircle className="mr-2" />
              Sí/No
            </Button>
            <div className="flex items-center justify-center bg-gray-100 rounded-lg font-mono text-lg font-bold min-h-[48px]">
              {oracleResult}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
