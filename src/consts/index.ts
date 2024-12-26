import { getPastYears } from '../utils';

const yearsArr = getPastYears();
console.log(yearsArr);

export const stepsData = [
    {
        step: 0,
        title: 'What do you want to add?',
        buttons: ['car', 'motorbike'],
        value: '',
    },
    {
        step: 1,
        title: 'Please, choose brand',
        buttons: ['HONDA', 'YAMAHA', 'KAWASAKI', 'BENELLI'],
        value: '',
    },
    {
        step: 2,
        title: 'Please, choose model',
        buttons: ['PCX', 'ADV', 'SCOOPY', 'BENELLI'],
        value: '',
    },
    {
        step: 3,
        title: 'Please, choose color',
        buttons: ['BLACK', 'BLUE', 'BROWN', 'CREAM'],
        value: '',
    },
    {
        step: 4,
        title: 'Please, choose year',
        buttons: yearsArr,
        value: '',
    },
    {
        step: 5,
        title: 'Please, add platenumber',
        buttons: ['DK 1234 XX 1225', 'DK 1234 XX'],
        value: '',
    },
    {
        step: 6,
        title: 'Please, add odometr',
        value: '',
    },
    {
        step: 7,
        title: '',
        switches: [
            {
                id: 0,
                title: 'Keyless',
                key: 'keyless',
                value: false,
            },
            {
                id: 1,
                title: 'ABS',
                key: 'abs',
                value: false
            },
            {
                id: 2,
                title: 'Surfrack',
                key: 'surfrack',
                value: false
            },
            {
                id: 3,
                title: 'Tailbox',
                key: 'box',
                value: false
            },
            {
                id: 4,
                title: 'STNK',
                key: 'stnk',
                value: false
            },

        ],
    },
];
