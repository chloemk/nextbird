import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import FollowerList from '../components/FollowerList';

const profile = () => {
	//! 더미데이터
	const followerList = [
		{ nickname: '김김' },
		{ nickname: '이이' },
		{ nickname: '박박' },
	];
	const followingList = [
		{ nickname: '리리' },
		{ nickname: '아아' },
		{ nickname: '사사' },
	];

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<title>내 프로필 | NextBird</title>
			</Head>
			<AppLayout>
				<NicknameEditForm />
				<FollowList header='팔로잉 목록' data={followerList} />
				<FollowerList header='팔로워 목록' data={followingList} />
			</AppLayout>
		</>
	);
};

export default profile;
