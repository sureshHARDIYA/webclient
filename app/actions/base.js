export const PREFIX_NAME = "APP";

export const PREFIX_CONST_REQUEST = constName => ({
  [`${constName}_REQUEST`]: `${PREFIX_NAME}_${constName}_REQUEST`,
  [`${constName}_SUCCESS`]: `${PREFIX_NAME}_${constName}_SUCCESS`,
  [`${constName}_FAILURE`]: `${PREFIX_NAME}_${constName}_FAILURE`
});
