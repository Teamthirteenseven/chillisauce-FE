import { useState } from 'react';
import { AuthFormValidation } from '../../hooks/user/useAuthFormValidation';
import { useSignUpSubmitHandler } from '../../hooks/user/useSignUpSubmitHandler';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { BlueBtn } from '../../components/button/BlueBtn';
import { SignUpTextInput } from '../../components/form/SignUpTextInput';
import ValidationError from '../../components/form/ValidationError';
import { StFormContain, StForm, StStartText } from './UserStyled';
import CertificationCkeck from '../../features/user/CertificationCkeck';

function SignUpUser() {
  const [user, setUser] = useState({
    type: 'user',
    username: '',
    email: '',
    password: '',
    passwordCheck: '',
    certification: '',
  });

  const {
    auth,
    setAuth,
    errors,
    onChangeEmailHandler,
    onChangePwHandler,
    onChangePwCheckHandler,
  } = AuthFormValidation(user, setUser);

  const { onSubmitHandler } = useSignUpSubmitHandler(user);

  return (
    <Page h="">
      <StFormContain h="600px">
        <StForm onSubmit={onSubmitHandler}>
          <StStartText>
            <Text shape="T28_700_30"> 회원가입 </Text>
          </StStartText>

          <SignUpTextInput
            innerText="사용자 이름"
            type="text"
            value={auth.username}
            placeholder="이름을 입력하세요."
            required
            onChange={e => setAuth({ ...auth, username: e.target.value })}
          />

          <SignUpTextInput
            innerText="사용자 이메일"
            type="email"
            value={auth.email}
            placeholder="이메일을 입력하세요."
            required
            onChange={onChangeEmailHandler}
          />
          <ValidationError value={errors.email} />

          <CertificationCkeck
            user={auth}
            certification={auth.certification}
            onChange={e => setAuth({ ...auth, certification: e.target.value })}
          />

          <SignUpTextInput
            innerText="비밀번호"
            type="password"
            value={auth.password}
            placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
            required
            onChange={onChangePwHandler}
          />
          <ValidationError value={errors.password} />

          <SignUpTextInput
            height="45px"
            type="password"
            value={auth.passwordCheck}
            placeholder="비밀번호 확인을 위해 한번 더 입력하세요."
            required
            onChange={onChangePwCheckHandler}
          />
          <ValidationError value={errors.passwordCheck} />
          <BlueBtn type="submit" mgt="20px">
            <Text shape="T18_700_22" color="var(--white)">
              확인
            </Text>
          </BlueBtn>
        </StForm>
      </StFormContain>
    </Page>
  );
}

export default SignUpUser;
