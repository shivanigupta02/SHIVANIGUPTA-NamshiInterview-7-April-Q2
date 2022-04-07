import { fork } from 'redux-saga/effects'
import sagaPLP from "./container/PLP/saga";

function* rootSaga () {
    yield [
        fork(sagaPLP), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    ];
}

export default rootSaga;