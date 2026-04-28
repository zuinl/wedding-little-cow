export interface Contribuicao {
    /**
     * ID único da contribuição
     */
    id: number
    /**
     * Valor da contribuição
     */
    valor: number
    /**
     * Mensagem do remetente para os noivos 
     */
    mensagem: string
    /**
     * Nome do remetente da contribuição
     */
    remetente: string
}