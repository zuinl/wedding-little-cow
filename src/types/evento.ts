export interface Evento {
    /**
     * Identificador único do evento
     */
    id: number;
    /**
     * Nome do primeiro noivo
     */
    nomeNoivo1: string;
    /**
     * Nome do segundo noivo
     */
    nomeNoivo2: string;
    /**
     * Data do evento
     * @example '2026-06-10'
     */
    dataEvento: string;
    /**
     * Endereço completo do evento
     */
    localEvento: string;
    /**
     * Hora do evento
     * @example '10:00'
     */
    horaEvento: string;
    /**
     * Mensagem longa de saudação para os convidados
     */
    saudacao: string;
    /**
     * Senha para acesso ao painel dos noivos
     */
    senha: string;
}