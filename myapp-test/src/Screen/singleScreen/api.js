import MakeRequest from "../../utils/apiHandler";

export async function sigupUserApiCall(body) {
  try {
    let result = await MakeRequest("http://127.0.0.1:5000/newuser").put(body);
    console.log("FROM signupAPI ", result);
    if (result.status === 200) {
      return { state: true, data: result.data.message };
    } else {
      return { state: false, data: result.message };
    }
  } catch (error) {
    console.log(error);
  }
}
