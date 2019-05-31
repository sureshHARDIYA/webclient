import client from "utils/graphql-client";
import * as VALUESET from "actions/valueset";
import { call, put } from "redux-saga/effects";

export function* onSearchRequest(action) {
  try {
    const { ValueSetList } = yield call(
      client,
      `
      query ValueSetList {
        ValueSetList {
          total
          page
          pageSize
          totalPage
          entry {
            resource {
              ...on ValueSet {
                id
                resourceType
                url
                identifier {
                  system
                  value
                }
                version
                name
                title
                status
                publisher
                description
              }
            }
          }
        }
      }
    `,
      { limit: parseInt(action.limit) || 100, page: parseInt(action.page) || 1 }
    );

    yield put(VALUESET.onSearchSuccess(ValueSetList));
    action.cb && (yield call(action.cb, ValueSetList));
  } catch (err) {
    yield put(VALUESET.onSearchFailure({ error: err }));
  }
}

export function* onSingleRequest(action) {
  try {
    const { ValueSet } = yield call(
      client,
      `
      query ValueSet {
          ValueSet(_id: "${action.id}") {
            id
            resourceType
            url
            identifier {
              system
              value
            }
            version
            name
            title
            status
            publisher
            description
  					compose {
              include {
                concept {
                  display
                  extension {
                    valueDecimal
                  }
                }
              }
            }
        }
}
    `
    );
    yield put(VALUESET.onSingleSuccess({ entry: ValueSet }));
    action.cb && (yield call(action.cb, ValueSet));
  } catch (err) {
    yield put(VALUESET.onSingleFailure({ error: err }));
  }
}
