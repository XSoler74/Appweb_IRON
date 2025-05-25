import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Upload, Save, AlertCircle } from "lucide-react";
import { useGameData } from "@/hooks/use-game-data";
import { useState } from "react";

export default function DataManager() {
  const { gameData, setGameData } = useGameData();
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const exportData = () => {
    // Obtener datos del diario desde localStorage
    const journalData = localStorage.getItem('ironsworn-journal');
    const journalEntries = journalData ? JSON.parse(journalData) : [];

    // Crear objeto completo con todos los datos
    const fullData = {
      character: gameData.character,
      progressTrackers: gameData.progressTrackers,
      oracleHistory: gameData.oracleHistory,
      journal: journalEntries,
      exportDate: new Date().toISOString(),
      version: "1.0"
    };

    // Crear archivo para descarga
    const dataStr = JSON.stringify(fullData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    // Crear elemento de descarga
    const link = document.createElement('a');
    link.href = url;
    link.download = `ironsworn-${gameData.character.name || 'personaje'}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const importedData = JSON.parse(content);

        // Validar estructura básica
        if (!importedData.character || !importedData.progressTrackers || !importedData.oracleHistory) {
          throw new Error('Formato de archivo inválido');
        }

        // Importar datos del juego
        setGameData({
          character: importedData.character,
          progressTrackers: importedData.progressTrackers,
          oracleHistory: importedData.oracleHistory
        });

        // Importar datos del diario si existen
        if (importedData.journal) {
          localStorage.setItem('ironsworn-journal', JSON.stringify(importedData.journal));
        }

        setImportStatus('success');
        setTimeout(() => setImportStatus('idle'), 3000);
      } catch (error) {
        console.error('Error al importar:', error);
        setImportStatus('error');
        setTimeout(() => setImportStatus('idle'), 3000);
      }
    };

    reader.readAsText(file);
    // Limpiar input para permitir seleccionar el mismo archivo de nuevo
    event.target.value = '';
  };

  const exportCharacterOnly = () => {
    // Exportar solo datos del personaje
    const characterData = {
      character: gameData.character,
      progressTrackers: gameData.progressTrackers,
      exportDate: new Date().toISOString(),
      type: "character-only",
      version: "1.0"
    };

    const dataStr = JSON.stringify(characterData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `personaje-${gameData.character.name || 'ironsworn'}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const exportJournalOnly = () => {
    // Exportar solo datos del diario
    const journalData = localStorage.getItem('ironsworn-journal');
    const journalEntries = journalData ? JSON.parse(journalData) : [];

    const journalExport = {
      journal: journalEntries,
      exportDate: new Date().toISOString(),
      type: "journal-only",
      version: "1.0"
    };

    const dataStr = JSON.stringify(journalExport, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `diario-${gameData.character.name || 'ironsworn'}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="font-cinzel flex items-center text-2xl">
            <Save className="mr-3 text-amber-600" />
            Gestión de Datos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Guarda y carga tus personajes, juramentos y entradas de diario localmente en tu dispositivo.
          </p>
        </CardContent>
      </Card>

      {/* Export Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Download className="mr-2 text-green-600" />
            Exportar Datos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button onClick={exportData} className="iron-bg hover:bg-amber-700 flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Exportar Todo
            </Button>
            <Button onClick={exportCharacterOnly} variant="outline" className="flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Solo Personaje
            </Button>
            <Button onClick={exportJournalOnly} variant="outline" className="flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Solo Diario
            </Button>
          </div>
          <div className="text-sm text-gray-500 space-y-1">
            <p><strong>Exportar Todo:</strong> Incluye personaje, juramentos, oráculos y diario completo</p>
            <p><strong>Solo Personaje:</strong> Incluye solo datos del personaje y juramentos</p>
            <p><strong>Solo Diario:</strong> Incluye únicamente las entradas del diario</p>
          </div>
        </CardContent>
      </Card>

      {/* Import Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="mr-2 text-blue-600" />
            Importar Datos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="import-file">Seleccionar archivo JSON</Label>
            <Input
              id="import-file"
              type="file"
              accept=".json"
              onChange={handleImport}
              className="focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          {/* Status Messages */}
          {importStatus === 'success' && (
            <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg text-green-800">
              <AlertCircle className="w-5 h-5 mr-2 text-green-600" />
              ¡Datos importados correctamente!
            </div>
          )}

          {importStatus === 'error' && (
            <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg text-red-800">
              <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
              Error al importar el archivo. Verifica que sea un archivo JSON válido de Ironsworn.
            </div>
          )}

          <div className="text-sm text-gray-500 space-y-1">
            <p><strong>Nota:</strong> Al importar datos se reemplazarán todos los datos actuales.</p>
            <p>Asegúrate de exportar tus datos actuales antes de importar si quieres conservarlos.</p>
          </div>
        </CardContent>
      </Card>

      {/* Current Data Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Información Actual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="font-bold text-lg">{gameData.character.name || 'Sin nombre'}</div>
              <div className="text-sm text-gray-600">Personaje</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="font-bold text-lg">{gameData.progressTrackers.length}</div>
              <div className="text-sm text-gray-600">Juramentos</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="font-bold text-lg">{gameData.oracleHistory.length}</div>
              <div className="text-sm text-gray-600">Consultas Oráculo</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="font-bold text-lg">
                {(() => {
                  const journalData = localStorage.getItem('ironsworn-journal');
                  return journalData ? JSON.parse(journalData).length : 0;
                })()}
              </div>
              <div className="text-sm text-gray-600">Entradas Diario</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}