import { useState, useEffect, useCallback } from 'react';
import { GameData, GameCharacter, ProgressTracker, OracleConsultation } from '@/lib/game-data';
import { gameStorage } from '@/lib/storage';

export const useGameData = () => {
  const [gameData, setGameData] = useState<GameData>(() => gameStorage.load());

  // Save to localStorage whenever gameData changes
  useEffect(() => {
    gameStorage.save(gameData);
  }, [gameData]);

  const updateCharacter = useCallback((character: Partial<GameCharacter>) => {
    setGameData(prev => ({
      ...prev,
      character: { ...prev.character, ...character }
    }));
  }, []);

  const updateCharacterStats = useCallback((stats: Partial<GameCharacter['stats']>) => {
    setGameData(prev => ({
      ...prev,
      character: {
        ...prev.character,
        stats: { ...prev.character.stats, ...stats }
      }
    }));
  }, []);

  const updateResource = useCallback((resource: keyof Pick<GameCharacter, 'health' | 'spirit' | 'supply' | 'momentum'>, value: number) => {
    const maxValues = { health: 5, spirit: 5, supply: 5, momentum: 10 };
    const minValues = { health: 0, spirit: 0, supply: 0, momentum: -6 };
    
    const clampedValue = Math.max(
      minValues[resource], 
      Math.min(maxValues[resource], value)
    );

    setGameData(prev => ({
      ...prev,
      character: {
        ...prev.character,
        [resource]: clampedValue
      }
    }));
  }, []);

  const addProgressTracker = useCallback((tracker: Omit<ProgressTracker, 'id'>) => {
    const newTracker: ProgressTracker = {
      ...tracker,
      id: Date.now().toString()
    };
    
    setGameData(prev => ({
      ...prev,
      progressTrackers: [...prev.progressTrackers, newTracker]
    }));
  }, []);

  const updateProgressTracker = useCallback((id: string, updates: Partial<ProgressTracker>) => {
    setGameData(prev => ({
      ...prev,
      progressTrackers: prev.progressTrackers.map(tracker =>
        tracker.id === id ? { ...tracker, ...updates } : tracker
      )
    }));
  }, []);

  const removeProgressTracker = useCallback((id: string) => {
    setGameData(prev => ({
      ...prev,
      progressTrackers: prev.progressTrackers.filter(tracker => tracker.id !== id)
    }));
  }, []);

  const addOracleConsultation = useCallback((consultation: OracleConsultation) => {
    setGameData(prev => ({
      ...prev,
      oracleHistory: [consultation, ...prev.oracleHistory.slice(0, 9)] // Keep only last 10
    }));
  }, []);

  const clearOracleHistory = useCallback(() => {
    setGameData(prev => ({
      ...prev,
      oracleHistory: []
    }));
  }, []);

  const resetGameData = useCallback(() => {
    gameStorage.clear();
    setGameData(gameStorage.load());
  }, []);

  return {
    gameData,
    setGameData,
    updateCharacter,
    updateCharacterStats,
    updateResource,
    addProgressTracker,
    updateProgressTracker,
    removeProgressTracker,
    addOracleConsultation,
    clearOracleHistory,
    resetGameData
  };
};
