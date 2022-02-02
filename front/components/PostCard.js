import React from 'react';
import PropTypes from 'prop-types';
import { Card, Popover, Button } from 'antd';
import {
	RetweetOutlined,
	HeartTwoTone,
	HeartOutlined,
	MessageOutlined,
	EllipsisOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import useToggle from '../hooks/useToggle';
import Avatar from 'antd/lib/avatar/avatar';

const PostCard = ({ post }) => {
	// ? const id = me && me.id 로그인을 한 상태라면 me가 있을 것이다. 그렇지 않으면 undefined
	const userId = useSelector((state) => state.user.me?.id);

	const [liked, onClickLiked] = useToggle(false);
	const [commentFormOpened, onClickCommentFormOpened] = useToggle(false);

	return (
		<div style={{ marginBottom: 20 }}>
			<Card
				cover={post.Images[0] && <PostImages />}
				actions={[
					<RetweetOutlined key='retweet' />,
					liked ? (
						<HeartTwoTone
							twoToneColor='#eb2f96'
							key='heart'
							onClick={onClickLiked}
						/>
					) : (
						<HeartOutlined key='heart' onClick={onClickLiked} />
					),
					<MessageOutlined key='comment' onClick={onClickCommentFormOpened} />,
					<Popover
						key='more'
						// 내가 쓴 글이면 수정, 삭제 || 남이 쓴 글이면 신고
						content={
							<Button.Group>
								{userId && post.User.id === Number(userId) ? (
									<>
										<Button>수정</Button>
										<Button type='danger'>삭제</Button>
									</>
								) : (
									<Button>신고</Button>
								)}
							</Button.Group>
						}
					>
						<EllipsisOutlined />
					</Popover>,
				]}
			>
				<Card.Meta
					avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
					title={post.User.nickname}
					description={post.content}
				/>
			</Card>
			{commentFormOpened && <div>댓글 부분</div>}
		</div>
	);
};

PostCard.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		User: PropTypes.object,
		content: PropTypes.string,
		createdAt: PropTypes.object,
		Comments: PropTypes.arrayOf(PropTypes.object),
		Images: PropTypes.arrayOf(PropTypes.object),
	}).isRequired,
};

export default PostCard;
