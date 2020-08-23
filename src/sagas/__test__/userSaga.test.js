import { loginSaga } from "../userSaga";
import { loginRequest, setUserDetails, loginFailed } from "../../actions/loginActions";
import { call } from "redux-saga/effects";
import login from "../../apis/loginApi";

describe("Login Saga", () => {

  let gen, action;

  const response = {
    data: {
      id: 1,
      username: 1,
      auth_token: "test",
    },
  };
  beforeEach(() => {
    action = loginRequest({
      email: "sanjay123@gmail.com",
      password: "1234",
    });
    gen = loginSaga(action);
  });

  it("Must Call Api", () => {
    expect(gen.next().value).toEqual(call(login, action.value));
  });

  it("Must Dispatch Success Action", () => {
    gen.next();
    // expect(gen.next().value).toEqual(call(login, action.value))
    expect(gen.next(response).value).toEqual(
      put(setUserDetails(response.data))
    );
    expect(gen.next().done).toEqual(true);
  });

  it("Must Dispatch Failure Action", () => {
    const error = "Login Failed!!";
    gen.next();
    expect(gen.throw(error).value).toEqual(put(loginFailed(error)));
  });
});