export async function setCookieOnReq(cookies) {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");
    const options = {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`
      }
    };
//   const options = {
//     headers: {
//       Cookie:
//         `${cookies.get("accessToken")?.name}=${
//           cookies.get("accessToken")?.value
//         }; ${cookies.get("refreshToken")?.name}=${
//           cookies.get("refreshToken")?.value
//         }` || "-",
//     },
//   };
  return options;
}
