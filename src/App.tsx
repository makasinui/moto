import HeadImage from './assets/img/head.png';

import Icon from './components/icons/Icon';
import CategoryBlock from './components/ui/CategoryBlock';
import Title from './components/ui/Title';
import { categories } from './mock/data';

function App() {
    return (
        <main className="bg-pink">
            <header className="px-4">
                <div className="flex justify-between items-center py-[6px]">
                    <div className="border border-silver w-8 h-8 flex items-center justify-center rounded-full">
                        <Icon type="arrow-left" />
                    </div>
                    <Title>Каталог</Title>
                    <img
                        src={HeadImage}
                        className="w-8 h-8 rounded-full border border-silver"
                        alt=""
                    />
                </div>
                <nav className="py-3 relative">
                    <div className="absolute left-3 top-5">
                        <Icon type="search" />
                    </div>
                    <input
                        type="search"
                        className="bg-pink py-2 border border-silver rounded-xl w-full px-[44px] text-base"
                        placeholder="Найти"
                    />
                    <div className="absolute right-3 top-5">
                        <Icon type="settings" />
                    </div>
                </nav>
            </header>
            <div className="rounded-xl bg-white h-full pl-4">
                <Title className="pt-4">Категории</Title>
                <section className="flex gap-2 mt-3 overflow-auto no-scrollbar">
                    {categories.map((item) => (
                        <div
                            key={item.id}
                            style={{ background: item.color }}
                            className={`max-h-[60px] flex items-center justify-between min-w-[140px] h-full rounded-xl overflow-hidden`}>
                            <span className="text-xs pl-1">{item.name}</span>
                            <img
                                className="max-w-[51px] relative"
                                src={item.img}
                                alt=""
                            />
                        </div>
                    ))}
                </section>
                <section>
                  {categories.map((item) => (
                    <CategoryBlock category={item} />
                  ))}
                </section>
            </div>
        </main>
    );
}

export default App;
