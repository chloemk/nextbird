import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const signup = () => {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<title>회원가입 | NextBird</title>
			</Head>
			<AppLayout>회원가입 페이지</AppLayout>
		</>
	);
};

export default signup;
