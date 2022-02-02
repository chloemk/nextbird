import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
	const formStyle = useMemo(
		() => ({
			margin: '10px 0 20px',
		}),
		[]
	);

	const formButtonStyle = useMemo(
		() => ({
			float: 'right',
		}),
		[]
	);

	const [text, setText] = useState('');
	const onChangeText = useCallback((e) => {
		setText(e.target.value);
	}, []);

	const { imagePaths } = useSelector((state) => state.post);
	const dispatch = useDispatch();

	const imageInput = useRef();

	const onSubmitPostForm = useCallback(() => {
		dispatch(addPost);
		setText('');
	}, []);

	const onClickImageUpload = useCallback(() => {
		imageInput.current.click();
	}, [imageInput.current]);

	return (
		<Form
			onFinish={onSubmitPostForm}
			style={formStyle}
			encType='multipart/form-data'
		>
			<Input.TextArea
				value={text}
				onChange={onChangeText}
				maxLength={140}
				placeholder='어떤 신기한 일이 있으셨나요?'
			/>

			<div>
				<input type='file' multiple hidden ref={imageInput} />
				<Button onClick={onClickImageUpload}>이미지 업로드</Button>
				<Button type='primary' style={formButtonStyle} htmlType='submit'>
					게시글 작성
				</Button>
			</div>
			<div>
				{imagePaths.map((v) => (
					<div key={v} style={{ display: 'inline-block' }}>
						<img src={v} style={{ width: '200px' }} alt={v} />
						<div>
							<Button>제거</Button>
						</div>
					</div>
				))}
			</div>
		</Form>
	);
};

export default PostForm;
