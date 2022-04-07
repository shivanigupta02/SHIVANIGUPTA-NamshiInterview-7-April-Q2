import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchProducts(action) {
   try {
    const products = yield fetch('https://fakestoreapi.com/products')
    .then(res=>res.json());

    yield put({type: "SET_PRODUCTS", products});
   } catch (e) {
    console.log('fetchProdcts', e);

      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* saga() {
  yield takeEvery("FETCH_PRODUCTS", fetchProducts);
}

export default saga;