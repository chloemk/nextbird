import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Input, Checkbox, Button, message } from 'antd';
import useCustomInput from '../hooks/useCustomInput';
import styled from 'styled-components';

const ErrorMessage = styled.div`
	color: red;
`;

const signup = () => {
	const [id, onChangeId] = useCustomInput('');
	const [nickname, onChangeNickname] = useCustomInput('');
	const [password, onChangePassword] = useCustomInput('');
	const [passwordCheck, setPasswordCheck] = useState('');
	const [passwordError, setPasswordError] = useState(false);

	const onChangePasswordCheck = useCallback(
		(e) => {
			const retypedPassword = e.target.value;
			setPasswordCheck(retypedPassword);
			// * true가 되면 각각의 패스워드가 다른 것에 대한 error 메세지 표시
			setPasswordError(retypedPassword !== password);
		},
		[password]
	);

	const [term, setTerm] = useState(false);
	const [termError, setTermError] = useState(false);

	const onSubmitForm = useCallback(() => {
		message.warning('회원가입 조건을 만족시켜주세요.');
		// 두 인풋이 일치하지 않으면 에러메세지 보여주기
		if (password !== passwordCheck) setPasswordError(true);
		// 약관동의 안하면 에러메세지 보여주기
		if (!term) setTermError(true);

		console.log('서버로 넘겨줄 친구들', id, password, passwordCheck);
	}, [password, passwordCheck, term]);

	const onChangeTerm = useCallback((e) => {
		setTerm(e.target.checked);
		setTermError(false);
	}, []);

	return (
		<>
			<AppLayout>
				<Head>
					<meta charSet='utf-8' />
					<title>회원가입 | NextBird</title>
				</Head>
				<Form onFinish={onSubmitForm}>
					<div>
						<label htmlFor='user-id'>아이디</label>
						<br />
						<Input name='user-id' value={id} onChange={onChangeId} required />
					</div>

					<div>
						<label htmlFor='user-nickname'>닉네임</label>
						<br />
						<Input
							name='user-nickname'
							value={nickname}
							onChange={onChangeNickname}
							required
						/>
					</div>

					<div>
						<label htmlFor='user-password'>비밀번호</label>
						<br />
						<Input
							name='user-password'
							type='password'
							value={password}
							onChange={onChangePassword}
							required
						/>
					</div>

					<div>
						<label htmlFor='user-passwordCheck'>비밀번호 체크</label>
						<br />
						<Input
							name='user-password-check'
							type='password'
							value={passwordCheck}
							onChange={onChangePasswordCheck}
							required
						/>
						{passwordError && (
							<ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
						)}
					</div>
					<div>
						<Checkbox name='user-term' checked={term} onChange={onChangeTerm}>
							약관에 동의합니다.
						</Checkbox>
						{termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
					</div>
					<div style={{ marginTop: 10 }}>
						<Button type='primary' htmlType='submit'>
							가입하기
						</Button>
					</div>
				</Form>
			</AppLayout>
		</>
	);
};

export default signup;
