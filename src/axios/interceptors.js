// import axios from "axios";
// import { cookies } from "../shared/cookies";

// const api = axios.create({
//     baseURL: process.env.REACT_APP_SERVER_URL
// });

// //요청시 AccessToken 계속 보내주기
// api.interceptors.request.use(function (config) {
//     const token = cookies.get("token")

//     if (!token) {
//         config.headers["Access_Token"]= null;
//         config.headers["Refresh_Token"]= null;
//         return config;
//     }
//     if (config.headers && token) {
//         const {Access_Token, Refresh_Token} = JSON.parse(token);
//         config.headers[Access_Token]= `Bearer ${Access_Token}`;
//         config.headers[Refresh_Token]= `Bearer ${Refresh_Token}`;
//         return config;
//     }
// });

// // AccessToken이 만료되었을 때
// api.interceptors.response.use(
//      (response) => {
//         return response;
//     },
//     async (error) => {
//         const originalConfig = error.config;
  
//         if (error.response && error.response.status === 401) {
//             const refreshToken = originalConfig.headers["Refresh_Token"];
//             try {
//                 const data = await axios({
//                     url: '/users/refresh',
//                     method: 'POST',
//                     headers: {
//                         authorization: refreshToken
//                     }
//                 });
//                 if (data) {
//                     localStorage.setItem("token",
//                         JSON.stringify(data.data, ["Access_Token", "Refresh_Token"])
//                     );
//                     return await api.request(originalConfig);
//                 }
//             } catch (e) {
//                 console.log("토큰 갱신 에러");
//             }
//         }
//     }
//   );