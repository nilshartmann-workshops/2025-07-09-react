import { z } from "zod/v4"; // <--- achtung ! v4 nehmen

type Plant = {
  id: string;
  name: string;
  location: string;
  wateringInterval: number;
  // optional:
  lastWatered?: string;
}

// constm ayBeAPlant = loadPlantFromBackend2("");