import type { Routes } from "@/types/routes";
import { useRouter } from "vue-router";

export const useNavigation = () => {
  const router = useRouter();

  const navigateTo = (route: Routes) => {
    router.push(route);
  };

  return {
    navigateTo,
  };
};
