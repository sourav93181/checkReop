import MakeRequest from "../../utils/apiHandler";

export async function getDetailApiCall() {
  try {
    let result = await MakeRequest("http://127.0.0.1:5000/newuser").get();
    console.log("FROM signupAPI ", result);
    if (result.status === 200) {
      return { state: true, data: result.data };
    } else {
      return { state: false, data: result.message };
    }
  } catch (error) {
    console.log(error);
  }
}
export async function SerachAPIcall(body) {
  try {
    let result = await MakeRequest("http://127.0.0.1:5000/newuser").post(body);
    console.log("FROM LoginAPI ", result);
    if (result.status === 200) {
      console.log("FROM LoginAPI ", result);
      return { state: true, data: result.data };
    } else {
      console.log("FROM LoginAPI ", result);
      return { state: false, data: result.message };
    }
  } catch (error) {
    console.log(error);
  }
}


