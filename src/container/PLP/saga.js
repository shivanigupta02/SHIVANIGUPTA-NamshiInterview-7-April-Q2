import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchProducts(action) {
  console.log('fetchProdcts');
   try {
      const products = yield call('https://fakestoreapi.com/products');
      yield put({type: "PRODUCT_FETCH_SUCCEEDED", products});
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* saga() {
  yield takeLatest("FETCH_PRODUCTS", fetchProducts);
}

export default saga;