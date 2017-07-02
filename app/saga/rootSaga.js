/**
 * Created by yangyang on 2017/6/23.
 */
import {configSaga} from './configSaga'
import {inputFormSaga} from './inputFormSaga'

export default function* rootSaga() {
  yield [
    ...configSaga,
    ...inputFormSaga,
  ]
}