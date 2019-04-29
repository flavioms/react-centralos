const SETORES = [
    {nome: 'TI'},
    {nome: 'RH'},
    {nome: 'CONTABILIDADE'},
    {nome: 'SUPRIMENTOS'},
    {nome: 'FINANCEIRO'},
    {nome: 'JURIDICO'},
    {nome: 'FILIAL'}
]

const FILIAIS = [
    {codigo: 'MVR', nome:'MVR - Volta Redonda'},
    {codigo: 'FRJ', nome:'FRJ - Rio de Janeiro'},
    {codigo: 'FPA', nome:'FPA - Porto do Açu'},
    {codigo: 'FMG', nome:'FMG - Minas Gerais'},
    {codigo: 'FCB', nome:'FCB - Cubatão'},
    {codigo: 'FSE', nome:'FSE - Serra'},
    {codigo: 'FVC', nome:'FVC - Vale dos Carajas'},
    {codigo: 'FBA', nome:'FBA - Bahia'}
]

module.exports = Object.freeze({
    SETORES: SETORES,
    FILIAIS: FILIAIS
});