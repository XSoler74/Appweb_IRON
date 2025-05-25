import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plus, Calendar, Trash2, Image } from "lucide-react";

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  images: string[];
}

export default function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    const saved = localStorage.getItem('ironsworn-journal');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntry, setCurrentEntry] = useState<JournalEntry>({
    id: '',
    title: '',
    content: '',
    date: '',
    images: []
  });

  const saveEntries = (newEntries: JournalEntry[]) => {
    setEntries(newEntries);
    localStorage.setItem('ironsworn-journal', JSON.stringify(newEntries));
  };

  const startNewEntry = () => {
    setCurrentEntry({
      id: Date.now().toString(),
      title: '',
      content: '',
      date: new Date().toLocaleDateString('es-ES'),
      images: []
    });
    setIsEditing(true);
  };

  const editEntry = (entry: JournalEntry) => {
    setCurrentEntry(entry);
    setIsEditing(true);
  };

  const saveEntry = () => {
    if (!currentEntry.title.trim() || !currentEntry.content.trim()) return;
    
    const updatedEntries = entries.some(e => e.id === currentEntry.id)
      ? entries.map(e => e.id === currentEntry.id ? currentEntry : e)
      : [...entries, currentEntry];
    
    saveEntries(updatedEntries);
    setIsEditing(false);
    setCurrentEntry({ id: '', title: '', content: '', date: '', images: [] });
  };

  const deleteEntry = (id: string) => {
    const updatedEntries = entries.filter(e => e.id !== id);
    saveEntries(updatedEntries);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentEntry({ id: '', title: '', content: '', date: '', images: [] });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setCurrentEntry(prev => ({
          ...prev,
          images: [...prev.images, result]
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    setCurrentEntry(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-cinzel flex items-center text-2xl">
              <BookOpen className="mr-3 text-amber-600" />
              Diario de Aventuras
            </CardTitle>
            <Button onClick={startNewEntry} className="iron-bg hover:bg-amber-700">
              <Plus className="w-4 h-4 mr-2" />
              Nueva Entrada
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Edit Form */}
      {isEditing && (
        <Card className="border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-800">
              {currentEntry.id && entries.some(e => e.id === currentEntry.id) ? 'Editar Entrada' : 'Nueva Entrada'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="entry-title">Título</Label>
              <Input
                id="entry-title"
                value={currentEntry.title}
                onChange={(e) => setCurrentEntry(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Título de la entrada..."
                className="focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            
            <div>
              <Label htmlFor="entry-content">Contenido</Label>
              <Textarea
                id="entry-content"
                value={currentEntry.content}
                onChange={(e) => setCurrentEntry(prev => ({ ...prev, content: e.target.value }))}
                placeholder="Escribe aquí tu entrada del diario..."
                rows={8}
                className="focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            <div>
              <Label htmlFor="image-upload">Imágenes</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="focus:ring-amber-500 focus:border-amber-500"
                />
                <Button type="button" variant="outline" size="sm">
                  <Image className="w-4 h-4 mr-1" />
                  Subir
                </Button>
              </div>
              
              {currentEntry.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                  {currentEntry.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={image} 
                        alt={`Imagen ${index + 1}`}
                        className="w-full h-24 object-cover rounded border"
                      />
                      <Button
                        onClick={() => removeImage(index)}
                        size="sm"
                        variant="destructive"
                        className="absolute top-1 right-1 w-6 h-6 p-0 opacity-80 group-hover:opacity-100"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex space-x-2 pt-4">
              <Button onClick={saveEntry} className="iron-bg hover:bg-amber-700">
                Guardar
              </Button>
              <Button onClick={cancelEdit} variant="outline">
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Entries List */}
      <div className="space-y-4">
        {entries.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <BookOpen className="mx-auto w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">No hay entradas en tu diario</p>
              <p className="text-gray-400">Comienza escribiendo tu primera aventura</p>
            </CardContent>
          </Card>
        ) : (
          entries.map((entry) => (
            <Card key={entry.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-cinzel text-xl">{entry.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {entry.date}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={() => editEntry(entry)} variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button 
                      onClick={() => deleteEntry(entry.id)} 
                      variant="outline" 
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-wrap text-gray-700">{entry.content}</p>
                </div>
                
                {entry.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                    {entry.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Imagen ${index + 1} de ${entry.title}`}
                        className="w-full h-32 object-cover rounded border cursor-pointer hover:opacity-90"
                        onClick={() => window.open(image, '_blank')}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}