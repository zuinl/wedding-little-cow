import { formatarMoeda } from "./formatarMoeda";

export const mascararMoeda = (valor: string): string => {
  const apenasNumeros = valor.replaceAll(/\D/g, "");
  const numero = Number.parseInt(apenasNumeros) || 0;
  return formatarMoeda(numero);
};
