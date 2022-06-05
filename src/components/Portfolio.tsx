import { VFC } from 'react';

const items = [
  {
    name: '175',
    image: '/175.png',
    date: '20 nov 2017',
    link: 'https://175.jp',
    title: '175.jp',
    description:
      'ニュース速報や企業のPRをスクレイピングし、リアルタイムで投資のサポートをするアドバイザーツール（非公表）',
  },
  {
    name: 'cs',
    image: '/comming_soon.png',
    date: '1 Jan 2022',
    link: '/',
    title: '公開準備中',
    description: '公開可能なポートフォリオを随時追加予定',
  },
];

export type PortfolioProps = {};

const Portfolio: VFC<PortfolioProps> = ({}) => {
  return (
    <div
      id="portfolio"
      className="bg-white px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h2 className="text-2xl font-bold w-full text-center py-8">ポートフォリオ</h2>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {items.map((item, index) => {
          return (
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded" key={index}>
              <a className="relative block h-40" href={item.link} aria-label="Article" target="_blank">
                <img className="w-full h-40 object-cover rounded" src={item.image} alt={item.name} />
              </a>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">{item.date}</p>
                <a
                  href={item.link}
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-opacity-50"
                  target="_blank"
                >
                  <p className="text-2xl font-bold leading-5">{item.title}</p>
                </a>
                <p className="mb-4 text-gray-700">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
