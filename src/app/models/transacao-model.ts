export class TransacaoModel {
    transacaoId: number = 0;
    descricao: string = '';
    valor: number = 0;
    dataTransacao: Date = new Date();
    tipoTransacaoId: number = 0;
    cartaoId: number = 0; 
}