import { takeEvery, put, all, call, takeLatest, fork } from 'redux-saga/effects'


function* helloSaga() {
    console.log('Hello Sagas!')
}

function* getUser() {
    console.log("called getUser api ")
    let api = yield fetch("https://jsonplaceholder.typicode.com/users");
    let data = yield api.json()
    yield put({ type: 'GET_USER_ASYNC', data: data })
}

function* watchGetUser() {
    console.log("called watchGetUser function ")
    yield takeLatest('GET_USER', getUser)
}

export default function* rootSaga() {
    yield all([
        call(helloSaga),
        call(watchGetUser)
    ])

}