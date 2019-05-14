import client from 'utils/graphql-client';
import { call, put } from 'redux-saga/effects';
import * as PATIENT from 'actions/patient';

export function* onSearchRequest(action) {
  try {
    const { PatientList } = yield call(client, `
      query PatientList($limit: Int, $page: Int) {
        PatientList(limit: $limit, page: $page) {
          total
          page
          pageSize
          totalPage

          entry {
            resource {
              ...on Patient {
                id
                gender
                active
                birthDate
                resourceType
                name { family given text use }
              }
            }
          }
        }
      }
    `, { limit: parseInt(action.limit) || 10, page: parseInt(action.page) || 1 });

    yield put(PATIENT.onSearchSuccess(PatientList));
    action.cb && (yield call(action.cb, PatientList));
  } catch (err) {
    yield put(PATIENT.onSearchFailure({ error:  err }));
  }
}
