export interface IPage {
    search?: string,
    page: number;
    amount: number;
    sort: string;
    totalPage?: number;
    total?: number;
    typesort: number;
}