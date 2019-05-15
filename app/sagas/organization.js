import client from "utils/graphql-client";
import { call, put } from "redux-saga/effects";
import * as ORGANIZATION from "actions/organization";

export function* onOrganizationRequest(action) {
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
              }
            }
          }
        }
      }
    `,
      { limit: parseInt(action.limit) || 10, page: parseInt(action.page) || 1 }
    );

    yield put(ORGANIZATION.onOrganizationSuccess(OrganizationList));
    action.cb && (yield call(action.cb, OrganizationList));
  } catch (err) {
    yield put(ORGANIZATION.onOrganizationFailure({ error: err }));
  }
}
