import { InputHTMLAttributes } from "react";
import { FieldConfig } from "formik";

type formikTextInputType = InputHTMLAttributes<HTMLInputElement> & FieldConfig;

export interface InputInterface extends formikTextInputType {
  label: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
}

export interface SelectInputInterface extends InputInterface {
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
