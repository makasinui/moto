export interface ITabs {
    title: string
    id: number
    items: ITabItems[]
}

export interface ITabItems {
    id: number
    img: string
    title: string
    location: string
    isVisit: 'да' | 'нет' | 'возможен'
    idr: number
}

export interface ICategory {
    name: string
    tabs: ITabs[]
    id: number
    color: string
    img: string
}

