import client from "utils/graphql-client";
import { call, put } from "redux-saga/effects";
import {
  onSearchSuccess,
  onSearchFailure,
  onSingleSuccess,
  onSingleFailure
} from "actions/organization";

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

    yield put(onSearchSuccess(OrganizationList));
    action.cb && (yield call(action.cb, OrganizationList));
  } catch (err) {
    yield put(onSearchFailure({ error: err }));
  }
}

export function* onSingleRequest(action) {
  try {
    const { Organization } = yield call(
      client,
      `
      query Organization {
          Organization(_id: "${action.id}") {
            resourceType
            name
            active
            alias
            address {
              text
            }
            type {
              coding {
                system
                code
              }
            }
            id
            telecom {
              system
              value
              use
            }
            contact {
              name {
                family
                given
                text
              }
              address {
                text
              }
            }
          }
        }
    `
    );
    yield put(onSingleSuccess({ entry: Organization }));
    action.cb && (yield call(action.cb, Organization));
  } catch (err) {
    yield put(onSingleFailure({ error: err }));
  }
}
