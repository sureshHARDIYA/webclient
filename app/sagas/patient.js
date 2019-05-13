import client from 'utils/graphql-client';
import { call, put } from 'redux-saga/effects';
import * as PATIENT from 'actions/patient';

export function* onSearchRequest(action) {
  try {
    const { PatientList: { entry } } = yield call(client, `
      query PatientList {
        PatientList {
          entry {
            resource {
              ...on Patient {
                id
                gender
                active
                birthDate
                resourceType
                name { family given }
              }
            }
          }
        }
      }
    `);

    yield put(PATIENT.onSearchSuccess({ patients: entry }));
    action.cb && (yield call(action.cb, entry));
  } catch (err) {
    yield put(PATIENT.onSearchFailure({ error:  err }));
  }
}
