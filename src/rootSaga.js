import { spawn, call, all } from "redux-saga/effects";
import sagaPLP from "./container/PLP/saga";

function* rootSaga() {
  
  const sagas = [
    sagaPLP
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}

export default rootSaga;
