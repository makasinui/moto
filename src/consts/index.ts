import { getPastYears } from "../utils";

const yearsArr = getPastYears();
console.log(yearsArr)

export const stepsData = [
    {
        step: 0,
        title: 'What do you want to add?',
        buttons: ['car', 'motorbike']
    },
    {
        step: 1,
        title: 'Please, choose brand',
        buttons: ['HONDA', 'YAMAHA', 'KAWASAKI', 'BENELLI']
    },
    {
        step: 2,
        title: 'Please, choose model',
        buttons: ['PCX', 'ADV', 'SCOOPY', 'BENELLI']
    },
    {
        step: 3,
        title: 'Please, choose color',
        buttons: ['BLACK', 'BLUE', 'BROWN', 'CREAM']
    },
    {
        step: 4,
        title: 'Please, choose year',
        buttons: yearsArr
    },
    {
        step: 5,
        title: 'Please, add platenumber',
        buttons: ['DK 1234 XX 1225', 'DK 1234 XX']
    },
    {
        step: 6,
        title: 'Please, add odometr',
    },
    {
        step: 7,
        title: '',
        switches: ['Нужен шлем', 'Держатель телефона', 'Дождевик']
    }
]