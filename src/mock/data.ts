import { ICategory } from "../types";

const categories: ICategory[] = [
    {
        id: 1,
        name: 'Брови и ресницы',
        img: '/category/1.png',
        color: '#ECEBEB',
        tabs: [
            {
                id: 1,
                title: 'Коррекция',
                items: [
                    {
                        id: 1,
                        title: 'Ламинирование бровей',
                        location: 'Чанггу',
                        isVisit: 'да',
                        idr: 400000,
                        img: '/category/f_1.png'
                    },
                    {
                        id: 2,
                        title: 'Ламинирование бровей',
                        location: 'Чанггу',
                        isVisit: 'да',
                        idr: 400000,
                        img: '/category/f_2.png'
                    }, 
                    {
                        id: 3,
                        title: 'Ламинирование бровей',
                        location: 'Чанггу',
                        isVisit: 'да',
                        idr: 400000,
                        img: '/category/f_3.png'
                    }
                ]

            },
            {
                id: 2,
                title: 'Ламинирование',
                items: [
                    {
                        id: 1,
                        title: 'Ламинирование бровей',
                        location: 'Чанггу',
                        isVisit: 'да',
                        idr: 400000,
                        img: '/category/f_3.png'
                    },
                    {
                        id: 2,
                        title: 'Ламинирование бровей',
                        location: 'Чанггу',
                        isVisit: 'да',
                        idr: 400000,
                        img: '/category/f_2.png'
                    }, 
                    {
                        id: 3,
                        title: 'Ламинирование бровей',
                        location: 'Чанггу',
                        isVisit: 'да',
                        idr: 400000,
                        img: '/category/f_1.png'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Волосы',
        img: '/category/2.png',
        color: "#E4CDFF",
        tabs: [
            {
                id: 1,
                title: 'Коррекция',
                items: [
                    {
                        id: 1,
                        title: 'Ламинирование бровей',
                        location: 'Чанггу',
                        isVisit: 'да',
                        idr: 400000,
                        img: '/category/f_1.png'
                    }
                ]

            }
        ]
    },
    {
        id: 3,
        name: 'Ногти',
        img: '/category/3.png',
        color: '#F5C1D4',
        tabs: [
            {
                id: 1,
                title: 'Коррекция',
                items: [
                    {
                        id: 1,
                        title: 'Ламинирование бровей',
                        location: 'Чанггу',
                        isVisit: 'да',
                        idr: 400000,
                        img: '/category/f_1.png'
                    }
                ]

            }
        ]
    },
];

export {
    categories
}