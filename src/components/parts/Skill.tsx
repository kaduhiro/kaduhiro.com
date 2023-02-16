import { faHtml5, faSquareJs, faPhp, faGolang, faDev } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const active_skills = [
  {
    icon: faHtml5,
    title: 'HTML, CSS',
    description: 'Webページのデザインや構築、SASS/SCSSなどのメタ言語でのスタイリングなどに対応',
    tags: [new Date().getFullYear() - 2007 + ' years'],
  },
  {
    icon: faSquareJs,
    title: 'JavaScript, TypeScript',
    description:
      '動的なWebアプリケーションやNode.jsを使用したサーバーサイドアプリケーション開発、Vue.jsやReactなどのフレームワークを利用したSPA、SSR開発',
    tags: [new Date().getFullYear() - 2008 + ' years'],
  },
  {
    icon: faPhp,
    title: 'PHP',
    description:
      '`Laravel` `CakePHP` など主要なフレームワークを使用してより効率的な開発、様々なアーキテクチャやデザインパターンを適切に選択しアプリケーションを構築',
    tags: [new Date().getFullYear() - 2010 + ' years'],
  },
  {
    icon: faGolang,
    title: 'Go',
    description: 'Ginを使用して高いパフォーマンスが求められるWebアプリケーションを構築',
    tags: [new Date().getFullYear() - 2020 + ' years'],
  },
  {
    icon: faDatabase,
    title: 'MySQL, NoSQL, Memcached',
    description:
      'データベースの設計・構築・パフォーマンスチューニングを行い、適切なキャッシュサーバを設置し負荷を分散させ安定したサービスを提供',
    tags: [new Date().getFullYear() - 2013 + ' years'],
  },
  {
    icon: faDev,
    title: 'Linux, Docker, Cloud',
    description:
      'オンプレミス、VPS、AWSなど様々なインフラ環境に対応、クラウド環境ではTerraformなどのIaCツールを使用してフレキシブルに構築',
    tags: [new Date().getFullYear() - 2007 + ' years'],
  },
];

export const Skill = () => {
  return (
    <>
      <div className='container mx-auto px-6 py-24'>
        <h1 className='text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl'>what can i do</h1>

        <p className='mt-4 text-gray-500 dark:text-gray-300 xl:mt-6'>kaduhiro が実現可能な技術スタック</p>

        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16'>
          {active_skills.map((active_skill, _) => {
            return (
              <div className='space-y-3' key={active_skill.title}>
                <span className='inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white'>
                  <FontAwesomeIcon className='h-6 w-6' icon={active_skill.icon} />
                </span>

                <h1 className='text-2xl font-semibold capitalize text-gray-700 dark:text-white'>
                  {active_skill.title}
                </h1>

                <p className='text-gray-500 dark:text-gray-300'>{active_skill.description}</p>

                <div className='flex items-center justify-start gap-1 space-y-1'>
                  {active_skill.tags.map((tag, _) => {
                    return (
                      <div
                        className='rounded-full bg-gray-200 px-2 text-xs text-blue-400 dark:bg-gray-700 sm:px-4 sm:py-1'
                        key={tag}
                      >
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
