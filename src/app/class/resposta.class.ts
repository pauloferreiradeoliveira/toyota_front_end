import { Contado } from './contado.class';

export interface Resposta {
    id: number;
    mensagem: string;
    assunto: string;
    contado?: Contado;
}
