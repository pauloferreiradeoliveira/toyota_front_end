import { SubServicos } from './subServicos.class';

export interface Servicos {
    id: number;
    titulo: string;
    descricao?: string;
    subServicos?: SubServicos[];

}
