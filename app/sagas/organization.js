import client from "utils/graphql-client";
import { call, put } from "redux-saga/effects";
import * as ORGANIZATION from "actions/organization";

export function* onSearchRequest(action) {
  try {
    const { OrganizationList } = yield call(
      client,
      `
      query OrganizationList {
        OrganizationList {
          total
          page
          pageSize
          totalPage
          entry {
            resource {
              ...on Organization {
                id
                active
                resourceType
                name
                address {
                  text
                  country
                }
              }
            }
          }
        }
      }
    `,
      { limit: parseInt(action.limit) || 100, page: parseInt(action.page) || 1 }
    );

    yield put(ORGANIZATION.onSearchSuccess(OrganizationList));
    action.cb && (yield call(action.cb, OrganizationList));
  } catch (err) {
    yield put(ORGANIZATION.onSearchFailure({ error: err }));
  }
}
