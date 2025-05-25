import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus } from "lucide-react";
import { ProgressTracker as ProgressTrackerType, progressRanks } from "@/lib/game-data";
import { useGameData } from "@/hooks/use-game-data";

interface ProgressTrackerProps {
  tracker: ProgressTrackerType;
}

export default function ProgressTracker({ tracker }: ProgressTrackerProps) {
  const { updateProgressTracker, removeProgressTracker } = useGameData();

  const handleNameChange = (name: string) => {
    updateProgressTracker(tracker.id, { name });
  };

  const handleRankChange = (rank: keyof typeof progressRanks) => {
    const maxProgress = progressRanks[rank];
    const newProgress = Math.min(tracker.progress, maxProgress);
    updateProgressTracker(tracker.id, { 
      rank, 
      maxProgress,
      progress: newProgress
    });
  };

  const handleProgressChange = (change: number) => {
    const newProgress = Math.max(0, Math.min(tracker.maxProgress, tracker.progress + change));
    updateProgressTracker(tracker.id, { progress: newProgress });
  };

  const handleRemove = () => {
    removeProgressTracker(tracker.id);
  };

  const progressPercentage = (tracker.progress / tracker.maxProgress) * 100;

  return (
    <Card className="bg-gray-50">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Input
            value={tracker.name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="font-medium text-gray-800 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 flex-1 mr-2"
          />
          <div className="flex items-center space-x-2">
            <Select value={tracker.rank} onValueChange={handleRankChange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Peligroso">Peligroso</SelectItem>
                <SelectItem value="Formidable">Formidable</SelectItem>
                <SelectItem value="Extremo">Extremo</SelectItem>
                <SelectItem value="Épico">Épico</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex-1">
            <Progress value={progressPercentage} className="h-3" />
          </div>
          <Badge variant="outline" className="font-mono text-sm">
            {tracker.progress}/{tracker.maxProgress}
          </Badge>
          <Button
            size="sm"
            onClick={() => handleProgressChange(1)}
            className="px-2 py-1 iron-bg text-white text-xs hover:bg-amber-700"
          >
            <Plus className="w-3 h-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
