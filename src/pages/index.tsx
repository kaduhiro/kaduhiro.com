import { NextPage } from 'next';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Skill from '@/components/Skill';
import Career from '@/components/Career';
import Portfolio from '@/components/Portfolio';

const Index: NextPage = () => {
	return (
		<Layout title="kaduhiro | Engineer, Investor and more">
			<Header />
			<Skill />
			<Career />
			<Portfolio />
		</Layout>
	);
};

export default Index;
