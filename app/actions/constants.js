import { PREFIX_CONST_REQUEST, PREFIX_NAME } from "./base";

export const ON_CHANGE_OPEN_KEYS = `${PREFIX_NAME}_ON_CHANGE_OPEN_KEYS`;

export const APP = {
  ...PREFIX_CONST_REQUEST("ROUTER")
};

export const LOGIN = {
  ...PREFIX_CONST_REQUEST("REFRESH")
};

export const PATIENT = {
  ...PREFIX_CONST_REQUEST("SEARCH")
};

export const ORGANIZATION = {
  ...PREFIX_CONST_REQUEST("ORGANIZATION")
};
