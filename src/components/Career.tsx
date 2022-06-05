import { VFC } from 'react';
import BusinessIcon from '@mui/icons-material/Business';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const items = [
	{
		number: 1,
		icon: BusinessIcon,
		title: 'Office Worker',
		description: '日々、業務をこなしながらのポートフォリオ制作',
	},
	{
		number: 2,
		icon: WaterfallChartIcon,
		title: 'Investor',
		description: '知識0から専業投資家として相場の世界に挑戦',
	},
	{
		number: 3,
		icon: AccessibilityNewIcon,
		title: 'Freelance',
		description: '経験と技術を糧にフリーエンジニアとして活動',
	},
];

export type CareerProps = {};

const Career: VFC<CareerProps> = ({}) => {
	return (
		<div
			id="career"
			className="bg-gray-100 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
		>
			<h2 className="text-2xl font-bold w-full text-center py-8">キャリア</h2>
			<div className="grid max-w-2xl mx-auto">
				{items.map((item, index) => {
					return (
						<div className="flex" key={index}>
							<div className="flex flex-col items-center mr-6">
								<div className="w-px h-10 opacity-0 sm:h-full" />
								<div>
									<div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
										{item.number}
									</div>
								</div>
								<div className="w-px h-full bg-gray-300" />
							</div>
							<div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
								<div className="sm:mr-5">
									<div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-blue-100 sm:w-24 sm:h-24">
										<item.icon className="text-gray-800" fontSize="large" />
									</div>
								</div>
								<div>
									<p className="text-xl font-semibold sm:text-base">
										{item.title}
									</p>
									<p className="text-sm text-gray-700">{item.description}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Career;
