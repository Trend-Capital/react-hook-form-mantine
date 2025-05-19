import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  YearPickerInput as $YearPickerInput,
  type DatePickerType,
  type YearPickerInputProps as $YearPickerInputProps,
} from "@mantine/dates";

export type YearPickerInputProps<T extends FieldValues> =
  UseControllerProps<T> &
    Omit<$YearPickerInputProps<DatePickerType>, "value" | "defaultValue">;

export function YearPickerInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: YearPickerInputProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$YearPickerInput
      error={fieldState.error?.message}
      value={value}
      onChange={(val) => {
        fieldOnChange(val);
        onChange?.(val);
      }}
      {...field}
      {...props}
    />
  );
}
