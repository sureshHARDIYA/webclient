import client from "utils/graphql-client";
import { call, put } from "redux-saga/effects";
import {
  onSearchSuccess,
  onSearchFailure,
  onRequestSingleSuccess,
  onRequestSingleFailure
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

export function* onRequestSingle(action) {
  try {
    const { Organization } = yield call(
      client,
      `
      query Organzation {
          Organization(_id: "5cd3ee0b5883c03fe4522436") {
            resourceType
            name
            active
            address {
              line
            }
            type {
              coding {
                system
                code
              }
            }
            id
          }
        }
    `
    );
    console.log(onRequestSingleSuccess(Organization));

    yield put(onRequestSingleSuccess(Organization));
    action.cb && (yield call(action.cb, Organization));
  } catch (err) {
    yield put(onRequestSingleFailure({ error: err }));
  }
}
