import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Login = () => {

  const REQUEST_URL = "http://localhost:3001";
  const params = useParams();

  // const requestUserData = async (provider: string, code: string): Promise<Response> => {
  //   try {
  //     const response = await fetch(`${REQUEST_URL}/auth/oauth2/${provider}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //        code
  //        }),
  //     });
  //     return response.json();
  //   } catch (error) {
  //     return Promise.reject(error);
  //   }
  // }

  useEffect(() => {

    const provider:string = params.provider || "";
    const urlQuery = new URLSearchParams(window.location.search);
    const code = urlQuery.get('code');

    console.log("login page called");
    console.log(`provider is ${params.provider}`);
    console.log(`code is ${code}`);
    console.log(JSON.stringify({code}));

    if (!code || code === "") {
      // TODO : 에러처리
      return;
    }
    if (!['42', 'google', 'kakao'].includes(provider)) {
      // TODO : 에러처리
      return;
    }
    // const response = requestUserData(provider, code);
    // response.then((data) => {
    //   if (data.status === 200 && data.body.getReader().read().then((result) => {result.value})) {
    //     // TODO: 액세스 코드 온 경우 -> 메인화면으로
    //   } else {
    //     // TODO: 액세스 코드 안 온 경우 -> 회원가입 화면으로
    // })
    // response.then((data) => console.log(data));

    // TODO: 나중에 지우기
    // setTimeout(() => {
    //   window.location.href = "http://localhost:3000/sign-up";
    // }, 1000);
  }
  , [params]);

  return (
    <div className="flex h-screen bg-true-gray">
      <div className="m-auto font-pressStart text-2xl text-white">
        Signing in...
      </div>
    </div>
  );
}

export default Login;