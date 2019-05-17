import client from "utils/graphql-client";
import * as PATIENT from "actions/patient";
import { call, put } from "redux-saga/effects";

export function* onSearchRequest(action) {
  try {
    const { PatientList } = yield call(
      client,
      `
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
    `,
      { limit: parseInt(action.limit) || 100, page: parseInt(action.page) || 1 }
    );

    yield put(PATIENT.onSearchSuccess(PatientList));
    action.cb && (yield call(action.cb, PatientList));
  } catch (err) {
    yield put(PATIENT.onSearchFailure({ error: err }));
  }
}

export function* onSingleRequest(action) {
  try {
    const { Patient } = yield call(
      client,
      `
      query Patient {
          Patient(_id: "${action.id}") {
            name {
              family
              given
              text
            }
            gender
            active
            address {
              text
            }
            id
          }
        }
    `
    );
    yield put(PATIENT.onSingleSuccess({ entry: Patient }));
    action.cb && (yield call(action.cb, Patient));
  } catch (err) {
    yield put(PATIENT.onSingleFailure({ error: err }));
  }
}
