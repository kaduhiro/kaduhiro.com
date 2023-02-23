import { useMemo, useState } from 'react';

import _ from 'lodash';
import Link from 'next/link';

import { Img } from '@/components/elements';

type PortfolioCategoryName = 'all' | 'tweaks' | 'web applications';

type PortfolioCategoryService = {
  image: string;
  url: string;
  title: string;
  description: string;
};

type PortfolioCategory = {
  name: PortfolioCategoryName;
  services: PortfolioCategoryService[];
};

const categories: PortfolioCategory[] = [
  {
    name: 'tweaks',
    services: [
      {
        image: '/img/no_image.png',
        url: 'https://github.com/kaduhiro/dotapps',
        title: 'dotapps',
        description:
          'あらゆる環境で同じ環境を実現するツール。複数の公開・非公開設定のdotfilesを統合してデプロイすることが可能。',
      },
    ],
  },
  {
    name: 'web applications',
    services: [
      {
        image: '/img/no_image.png',
        url: 'https://github.com/kaduhiro/chat-ai',
        title: 'ChatAI',
        description:
          'AIとのチャットができるWebアプリケーション。最先端のテクノロジーで、あなたのリクエストに瞬時に対応。情報検索からカジュアルトークにも対応。',
      },
      {
        image: '/img/no_image.png',
        url: 'https://175.jp',
        title: '175 | 投資アドバイザー',
        description:
          'SNSやニュース速報、企業のPR情報をスクレイピングし、リアルタイムで投資のサポートをするアドバイザーツール（未公開）',
      },
    ],
  },
];

export const Portfolio = () => {
  const [search, setSearch] = useState<string>();

  const [categoryName, setCategoryName] = useState<PortfolioCategoryName>('all');

  const changeCategory = (name: PortfolioCategoryName) => {
    setCategoryName(name != categoryName ? name : 'all');
  };

  const filteredCategories: PortfolioCategory[] = useMemo(() => {
    let items = _.cloneDeep(categories);

    if (search) {
      items = items.map((category) => {
        category.services = category.services.filter(
          (service) =>
            service.title.toLowerCase().includes(search.toLowerCase()) ||
            service.description.toLowerCase().includes(search.toLowerCase())
        );

        return category;
      });

      items = items.filter((v) => v.services.length);
    }

    if (categoryName != 'all') {
      items = items.filter((v) => v.name == categoryName);
    }

    return items;
  }, [search, categoryName]);

  return (
    <>
      <div className='container mx-auto px-6 py-24'>
        <h1 className='text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl'>Portfolio</h1>

        <div className='mt-8 lg:-mx-12 lg:flex xl:mt-16'>
          <div className='lg:mx-12'>
            <div className='flex flex-col bg-white  p-4 dark:border-gray-700 dark:bg-gray-900 lg:w-64'>
              <div className='relative'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg className='h-5 w-5 text-gray-400' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </span>

                <input
                  type='text'
                  className='w-full rounded-md border bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300/40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300'
                  placeholder='Search'
                  onKeyUp={(e) => setSearch(e.currentTarget.value)}
                />
              </div>

              <div className='flex flex-1 flex-col justify-between'>
                <nav>
                  {(categoryName != 'all' ? categories : filteredCategories).map((category, _) => {
                    return (
                      <button
                        key={category.name}
                        className={
                          (category.name == categoryName ? 'bg-gray-100 dark:bg-gray-800' : null) +
                          ' capitalize mt-5 flex w-full items-center rounded-md px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 '
                        }
                        onClick={() => changeCategory(category.name)}
                      >
                        {category.name}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          <div className='mt-8 flex-1 lg:mx-12 lg:mt-0'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 '>
              {filteredCategories.map((category, _) =>
                category.services.map((service, _) => {
                  return (
                    <div key={service.title} className='animate-fade-in-top'>
                      <Link href={service.url} target='_blank'>
                        <Img
                          className='h-64 w-full rounded-lg border-2 object-cover duration-200 hover:opacity-60'
                          src={service.image}
                          alt='image'
                        />
                      </Link>
                      <h2 className='mt-4 text-2xl font-semibold text-gray-800 dark:text-white'>{service.title}</h2>
                      <p className='mt-2 tracking-wider text-gray-400'>{service.description}</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
