export interface Objetivo {
  /**
   * Identificador único do objetivo
   */
  id: number;
  /**
   * Título do objetivo
   */
  titulo: string;
  /**
   * Descrição longa do objetivo
   */
  descricao: string;
  /**
   * Valor, em BRL, da meta do objetivo
   */
  meta: number;
  /**
   * Valor, em BRL, já arrecadado
   */
  atual: number;
  /**
   * Identificador do ícone do objetivo
   */
  icone: keyof typeof IconeObjetivo;
  /**
   * Chave Pix para contribuição. Recomendado uso de chave aleatória.
   */
  chavePix: string;
}

export enum IconeObjetivo {
    VIAGEM = 'Viagem',
    TRANSPORTE = 'Transporte',
    ROUPAS = 'Roupas',
    CASA = 'Casa',
    CAMA = 'Cama, Mesa e Banho',
    COZINHA = 'Cozinha',
    PASSEIO = 'Passeio',
    CRIANCA = 'Criança',
    OUTROS = 'Outros'
}
