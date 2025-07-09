export type Plant = {
  id: string;
  name: string;
  location: string;
  wateringInterval: number;
  // optional:
  lastWatered?: string;
}