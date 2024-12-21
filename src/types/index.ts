export interface IBike {
    id: number;
    plate: string;
    owner_id: number;
    status: number
    top: boolean
    payed: boolean | null
    ready_date: Date | null
    brand: string
    model: string
    type: string
    cc: null | boolean
    color: string
    wr: boolean
    stnk: boolean
    year: number
    
}