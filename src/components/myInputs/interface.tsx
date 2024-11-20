import { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { FieldConfig } from "formik";

type formikTextInputType = InputHTMLAttributes<HTMLInputElement> & FieldConfig;
type formikSelectInputType = SelectHTMLAttributes<HTMLSelectElement> &
  FieldConfig<any> &
  InputInterface;
export interface InputInterface extends formikTextInputType {
  label: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
}

export interface SelectInputInterface extends formikSelectInputType {
  options?: { label: string; value: string | number }[];
}

export interface RadioInputInterface extends InputInterface {
  options?: { label: string; value: string | number }[];
}

export interface MyButtonInterface {
  name: string;
  style?: string;
  onClick?(): any;
  type?: "button" | "submit";
}
