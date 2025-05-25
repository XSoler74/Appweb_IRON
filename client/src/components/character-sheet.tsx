import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { UserCircle, BarChart3, Heart, Plus, Minus, Trash2 } from "lucide-react";
import { useGameData } from "@/hooks/use-game-data";
import ProgressTracker from "./progress-tracker";

export default function CharacterSheet() {
  const { 
    gameData, 
    updateCharacter, 
    updateCharacterStats, 
    updateResource,
    addProgressTracker 
  } = useGameData();

  const { character, progressTrackers } = gameData;

  const handleStatChange = (stat: keyof typeof character.stats, value: number) => {
    const clampedValue = Math.max(1, Math.min(4, value));
    updateCharacterStats({ [stat]: clampedValue });
  };

  const handleResourceAdjust = (resource: keyof Pick<typeof character, 'health' | 'spirit' | 'supply' | 'momentum'>, change: number) => {
    updateResource(resource, character[resource] + change);
  };

  const getResourcePercentage = (resource: keyof Pick<typeof character, 'health' | 'spirit' | 'supply' | 'momentum'>) => {
    if (resource === 'momentum') {
      return ((character[resource] + 6) / 16) * 100; // -6 to +10 range
    }
    return (character[resource] / 5) * 100; // 0 to 5 range
  };

  const getResourceColor = (resource: keyof Pick<typeof character, 'health' | 'spirit' | 'supply' | 'momentum'>) => {
    switch (resource) {
      case 'health': return 'bg-red-500';
      case 'spirit': return 'bg-blue-500';
      case 'supply': return 'bg-green-500';
      case 'momentum': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const handleAddTracker = () => {
    addProgressTracker({
      name: 'Nuevo contador',
      rank: 'Peligroso',
      progress: 0,
      maxProgress: 10
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Character Info Card */}
      <div className="lg:col-span-1">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-cinzel flex items-center">
              <UserCircle className="mr-2 text-amber-600" />
              Información del Personaje
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="character-name">Nombre</Label>
              <Input
                id="character-name"
                value={character.name}
                onChange={(e) => updateCharacter({ name: e.target.value })}
                placeholder="Nombre del personaje"
                className="focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="character-exp">Experiencia</Label>
                <Input
                  id="character-exp"
                  type="number"
                  value={character.experience}
                  onChange={(e) => updateCharacter({ experience: parseInt(e.target.value) || 0 })}
                  className="focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div>
                <Label>Nivel</Label>
                <div className="p-3 bg-gray-100 rounded-lg font-mono text-center">
                  {character.level}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card>
          <CardHeader>
            <CardTitle className="font-cinzel flex items-center">
              <BarChart3 className="mr-2 text-amber-600" />
              Características
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(character.stats).map(([stat, value]) => {
                const statNames = {
                  edge: 'Filo',
                  heart: 'Corazón', 
                  iron: 'Hierro',
                  shadow: 'Sombra',
                  wits: 'Mente'
                };
                return (
                  <div key={stat} className="text-center">
                    <Label className="block mb-2">{statNames[stat as keyof typeof statNames]}</Label>
                    <Input
                      type="number"
                      min="1"
                      max="4"
                      value={value}
                      onChange={(e) => handleStatChange(stat as keyof typeof character.stats, parseInt(e.target.value) || 1)}
                      className="text-center font-mono text-lg border-2 border-amber-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resources and Progress */}
      <div className="lg:col-span-2">
        {/* Resources Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-cinzel flex items-center">
              <Heart className="mr-2 text-red-500" />
              Recursos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {(['health', 'spirit', 'supply', 'momentum'] as const).map((resource) => {
                const resourceNames = {
                  health: 'Salud',
                  spirit: 'Espíritu',
                  supply: 'Suministros',
                  momentum: 'Impulso'
                };
                
                const colorClasses = {
                  health: 'text-red-500 bg-red-500',
                  spirit: 'text-blue-500 bg-blue-500',
                  supply: 'text-green-500 bg-green-500',
                  momentum: 'text-purple-500 bg-purple-500'
                };

                return (
                  <div key={resource} className="text-center">
                    <Label className="block mb-2">{resourceNames[resource]}</Label>
                    <div className="relative mb-4">
                      <Progress
                        value={getResourcePercentage(resource)}
                        className="h-4 mb-2"
                      />
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleResourceAdjust(resource, -1)}
                        className={`w-8 h-8 rounded-full p-0 ${colorClasses[resource]} hover:opacity-80 text-white`}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <Badge variant="outline" className="font-mono font-bold text-lg min-w-[2rem]">
                        {character[resource]}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleResourceAdjust(resource, 1)}
                        className={`w-8 h-8 rounded-full p-0 ${colorClasses[resource]} hover:opacity-80 text-white`}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Progress Trackers */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="font-cinzel flex items-center">
                <BarChart3 className="mr-2 text-amber-600" />
                Juramentos
              </CardTitle>
              <Button onClick={handleAddTracker} size="sm" className="iron-bg hover:bg-amber-700">
                <Plus className="w-4 h-4 mr-1" />
                Añadir
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {progressTrackers.length === 0 ? (
                <div className="text-center text-gray-500 italic py-8">
                  No hay juramentos activos
                </div>
              ) : (
                progressTrackers.map((tracker) => (
                  <ProgressTracker key={tracker.id} tracker={tracker} />
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
