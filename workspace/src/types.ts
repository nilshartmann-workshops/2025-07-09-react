import { z } from "zod/v4";

// export type Plant = {
//   id: string;
//   name: string;
//   location: string;
//   wateringInterval: number;
//   // optional:
//   lastWatered?: string;
// }

// zod
export const PlantSchema = z.object({
  id: z.string(),
  name: z.string().nonempty(),
  location: z.string().nonempty(),
  wateringInterval: z.number().min(1),
  lastWatered: z.iso.date().optional()
})

export type Plant = z.infer<typeof PlantSchema>

function loadPlantFromBackend(plantId: string): any {
}
function loadPlantFromBackend2(plantId: string): unknown {
  return ""
}

function showPlant(plant: Plant) {

}

// const mayBeAPlant = loadPlantFromBackend2("");
// const plant = PlantSchema.parse(mayBeAPlant)
// showPlant(plant);