import { useState } from 'react';
import Title from './Title';
import { ICategory, ITabs } from '../../types';
import Icon from '../icons/Icon';

export default function CategoryBlock({ category }: { category: ICategory }) {
    const [activeTab, setActiveTab] = useState<ITabs>(category.tabs[0]);

    return (
        <div className="flex flex-col gap-3 pt-4">
            <Title small>{category.name}</Title>
            <nav className="flex gap-2 overflow-auto no-scrollbar">
                {category.tabs.map((item) => (
                    <div
                        className={`p-2 text-xs rounded-lg zoom ${
                            activeTab.id === item.id ? 'bg-silver text-white' : 'border border-silver text-silver'
                        }`}
                        onClick={() => setActiveTab(item)}>
                        {item.title}
                    </div>
                ))}
            </nav>
            <div className="flex flex-nowrap gap-2 overflow-auto no-scrollbar">
                {activeTab.items.map((item) => (
                    <div
                        className="flex flex-col min-w-[33.3%] basis-1/3 zoom"
                        key={item.id}>
                        <img
                            className="rounded-lg max-h-[86px] h-full object-cover"
                            src={item.img}
                        />
                        <span className="pt-1 text-silver text-sm">{item.title}</span>
                        <div className="flex mt-2 mb-[2px]">
                            <Icon type="location" />
                            <span className="text-xs">{item.location}</span>
                        </div>
                        <div className="flex flex-col text-xs gap-2">
                            <div className="flex justify-between">
                                <span>Выезд:</span>
                                <span>{item.isVisit}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>IDR:</span>
                                <span>{item.idr}</span>
                            </div>
                        </div>
                        <button className="zoom py-[6px] mt-2 text-sm rounded-lg px-6 bg-silver text-white">Открыть</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
