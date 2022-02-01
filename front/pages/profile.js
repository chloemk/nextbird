import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const profile = () => {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<title>내 프로필 | NextBird</title>
			</Head>
			<AppLayout>내 프로필 페이지</AppLayout>
		</>
	);
};

export default profile;
