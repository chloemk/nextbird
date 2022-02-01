import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
	const onLogOut = useCallback(() => {
		console.log('오잉');
		setIsLoggedIn(false);
	}, []);

	return (
		<>
			<Card
				actions={[
					<div key='twit'>
						트윗
						<br />0
					</div>,
					<div key='followings'>
						팔로잉
						<br />0
					</div>,
					<div key='follwers'>
						팔로워
						<br />0
					</div>,
				]}
			>
				<Card.Meta avatar={<Avatar>CK</Avatar>} title='Chloe'></Card.Meta>
				<Button onClick={onLogOut}>로그아웃</Button>
			</Card>
		</>
	);
};

export default UserProfile;
