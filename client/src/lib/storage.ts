import { GameData, defaultGameData } from './game-data';

const STORAGE_KEY = 'ironsworn-lodestar';

export const gameStorage = {
  save: (data: GameData): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving game data:', error);
    }
  },

  load: (): GameData => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with defaults to ensure all properties exist
        return {
          character: { ...defaultGameData.character, ...parsed.character },
          progressTrackers: parsed.progressTrackers || [],
          oracleHistory: parsed.oracleHistory || []
        };
      }
    } catch (error) {
      console.error('Error loading game data:', error);
    }
    return defaultGameData;
  },

  clear: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing game data:', error);
    }
  }
};
