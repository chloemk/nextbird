import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import useCustomInput from '../hooks/useCustomInput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
	// * 로그인이 되어있으면 id를 가져올 수 있음
	const id = useSelector((state) => state.user.me?.id);

	const [commentText, onChangeCommentText] = useCustomInput('');
	const onSubmitComment = useCallback(() => {}, [commentText]);
	console.log(post.id, commentText);

	return (
		<>
			<Form onFinish={onSubmitComment}>
				<Form.Item style={{ position: 'relative', margin: 0 }}>
					<Input.TextArea
						rows={4}
						value={commentText}
						onChange={onChangeCommentText}
					/>
					<Button
						type='primary'
						htmlType='submit'
						style={{ position: 'absolute', right: 0, bottom: -40 }}
					>
						작성하기
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

CommentForm.propTypes = {
	post: PropTypes.object.isRequired,
};

export default CommentForm;
