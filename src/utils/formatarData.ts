export const formatarData = (data: string): string =>
  new Date(data).toLocaleDateString("pt-BR", { dateStyle: "full" });
