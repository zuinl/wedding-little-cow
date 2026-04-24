import type { IconeObjetivo } from "@/types/objetivo";
import {
  Baby,
  Bed,
  Car,
  Goal,
  Home,
  Plane,
  Shirt,
  TreePine,
  Utensils,
  type LucideIcon,
} from "@lucide/vue";

export const ICONES: { [K in keyof typeof IconeObjetivo]: LucideIcon } = {
  CAMA: Bed,
  CASA: Home,
  COZINHA: Utensils,
  CRIANCA: Baby,
  OUTROS: Goal,
  PASSEIO: TreePine,
  ROUPAS: Shirt,
  TRANSPORTE: Car,
  VIAGEM: Plane,
};
