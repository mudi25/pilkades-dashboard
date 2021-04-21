import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "react-select";
import TextFiled from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";
interface ComponentTextFieldProps {
  label: string;
  name: string;
  control: any;
  defaultValue?: string | number;
  required: boolean;
  inputType: string;
  multiline?: boolean;
  disabled?: boolean;
}
export const ComponentTextField: React.FunctionComponent<ComponentTextFieldProps> = ({
  label,
  name,
  control,
  defaultValue,
  required,
  inputType,
  multiline,
  disabled,
}) => {
  return (
    <FormControl component="fieldset" fullWidth aria-readonly={true}>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        as={TextFiled}
        name={name}
        control={control}
        rules={{ required }}
        defaultValue={defaultValue !== undefined ? defaultValue : ""}
        type={inputType}
        multiline={multiline ? true : false}
        rowsMax={multiline ? 10 : 1}
        rows={multiline ? 5 : 1}
        disabled={disabled}
      />
    </FormControl>
  );
};
export interface ComponentSelectPropsValue {
  value: string | number | boolean;
  label: string;
}
interface ComponentSelectProps {
  label: string;
  name: string;
  control: any;
  value: ComponentSelectPropsValue[];
  required: boolean;
  defaultValue?: ComponentSelectPropsValue;
}
export const ComponentSelect: React.FunctionComponent<ComponentSelectProps> = ({
  label,
  name,
  control,
  value,
  required,
  defaultValue,
}) => {
  return (
    <FormControl component="fieldset" fullWidth aria-readonly={true}>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        as={Select}
        options={value}
        control={control}
        rules={{ required }}
        defaultValue={defaultValue !== undefined ? defaultValue : {}}
      />
    </FormControl>
  );
};
