import client from "utils/graphql-client";
import * as QUESTIONNAIRE from "actions/questionnaire";
import { call, put } from "redux-saga/effects";

export function* onSearchRequest(action) {
  try {
    const { QuestionnaireList } = yield call(
      client,
      `
      query QuestionnaireList {
        QuestionnaireList {
          total
          page
          pageSize
          totalPage
          entry {
            resource {
              ...on Questionnaire {
                id
                resourceType
                url
                title
                date
                purpose
              }
            }
          }
        }
      }
    `,
      { limit: parseInt(action.limit) || 100, page: parseInt(action.page) || 1 }
    );

    yield put(QUESTIONNAIRE.onSearchSuccess(QuestionnaireList));
    action.cb && (yield call(action.cb, QuestionnaireList));
  } catch (err) {
    yield put(QUESTIONNAIRE.onSearchFailure({ error: err }));
  }
}

export function* onSingleRequest(action) {
  try {
    const { Questionnaire } = yield call(
      client,
      `
      query Questionnaire {
          Questionnaire(_id: "${action.id}") {
            id
            title
            item {
              type
              text
              answerValueSet {
                id
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
          }
        }
    `
    );
    yield put(QUESTIONNAIRE.onSingleSuccess({ entry: Questionnaire }));
    action.cb && (yield call(action.cb, Questionnaire));
  } catch (err) {
    yield put(QUESTIONNAIRE.onSingleFailure({ error: err }));
  }
}
