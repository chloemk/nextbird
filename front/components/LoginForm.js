import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import useCustomInput from '../hooks/useCustomInput';

const ButtonWrapper = styled.div`
	margin-top: 10px;
`;

const FormWrapper = styled(Form)`
	padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
	const [id, onChangeId] = useCustomInput('');
	const [password, onChangePassword] = useCustomInput('');

	const onSubmitForm = useCallback(() => {
		console.log('인풋값', id, password);
		setIsLoggedIn(true);
	}, [id, password]);

	return (
		<>
			<FormWrapper onFinish={onSubmitForm}>
				<div>
					<label htmlFor='user-id'>아이디</label>
					<br />
					<Input name='user-id' value={id} onChange={onChangeId} required />
				</div>

				<div>
					<label htmlFor='user-password'>비밀번호</label>
					<br />
					<Input
						type='password'
						name='user-password'
						value={password}
						onChange={onChangePassword}
						required
					/>
				</div>

				<ButtonWrapper>
					<Button type='primary' htmlType='submit' loading={false}>
						로그인
					</Button>
					<Link href='/signup'>
						<a>
							<Button>회원가입</Button>
						</a>
					</Link>
				</ButtonWrapper>
			</FormWrapper>
		</>
	);
};

LoginForm.propTypes = {
	setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;