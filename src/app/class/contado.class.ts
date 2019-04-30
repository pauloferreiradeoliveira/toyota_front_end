import { Resposta } from './resposta.class';

export interface Contado {
    id: number;
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
    resposta?: Resposta;
}