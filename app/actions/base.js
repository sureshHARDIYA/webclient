export const PREFIX_NAME = "APP";

export const PREFIX_CONST_REQUEST = (methodName, constName) => ({
  [`${methodName}_REQUEST`]: `${PREFIX_NAME}_${constName}_${methodName}_REQUEST`,
  [`${methodName}_SUCCESS`]: `${PREFIX_NAME}_${constName}_${methodName}_SUCCESS`,
  [`${methodName}_FAILURE`]: `${PREFIX_NAME}_${constName}_${methodName}_FAILURE`,
});
