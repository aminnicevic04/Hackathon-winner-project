export enum ActionType {
  INPUT_CHANGE = "INPUT_CHANGE",
  INPUT_BLUR = "INPUT_BLUR",
  INPUT_EMP = "INPUT_EMP",
}

export type ValidatorTypes = {
  type: string;
  password?: string;
  val?: number;
};

export type ActionTypes = {
  type: ActionType;
  payload: string;
  validators: ValidatorTypes[];
};

export type ValidatorState = {
  value: string;
  isValid: boolean;
  isTouched: boolean;
};
