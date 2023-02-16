import {} from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faChartLine, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Element as ScrollElement } from 'react-scroll';

const careers = [
  {
    icon: faBuilding,
    title: 'office worker',
    description: '仕事としてコーディングを行う傍ら、プライベートではサーバの構築やポートフォリオ制作に時間を費やす',
  },
  {
    icon: faChartLine,
    title: 'investor',
    description:
      '知識も経験もない株式取引の世界にいきなり飛び込み、IT技術を駆使し専業トレーダーとして暗中模索の日々を送る',
  },
  {
    icon: faUserSecret,
    title: 'freelance',
    description:
      'Webアプリケーション開発やインフラ構築など、幅広いITに関する技術力を武器にフリーランスITエンジニアとして活動',
  },
];

export const Career = () => {
  return (
    <>
      <ScrollElement name='career' className='container mx-auto px-6 py-24'>
        <h1 className='text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl'>Career</h1>
        <div className='flex-wrap items-stretch justify-center gap-8 py-10 text-center sm:flex'>
          {careers.map((career, _) => {
            return (
              <div
                className='w-full rounded-lg bg-white p-4 shadow-lg duration-500 hover:scale-110 dark:bg-gray-800 sm:w-1/2 md:w-1/2 lg:w-1/4'
                key={career.title}
              >
                <div className='shrink-0'>
                  <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white'>
                    <FontAwesomeIcon className='h-6 w-6' icon={career.icon} />
                  </div>
                </div>
                <h3 className='py-4 text-2xl font-semibold capitalize text-gray-700 dark:text-white sm:text-xl'>
                  {career.title}
                </h3>
                <p className='py-4 text-gray-500 dark:text-gray-300'>{career.description}</p>
              </div>
            );
          })}
        </div>
      </ScrollElement>
    </>
  );
};
