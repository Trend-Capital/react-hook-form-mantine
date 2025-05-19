import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  DatePickerInput as $DatePickerInput,
  type DatePickerType,
  type DatePickerInputProps as $DatePickerInputProps,
} from "@mantine/dates";

export type DatePickerInputProps<T extends FieldValues> =
  UseControllerProps<T> &
    Omit<$DatePickerInputProps<DatePickerType>, "value" | "defaultValue">;

export function DatePickerInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: DatePickerInputProps<T>) {
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
    <$DatePickerInput
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
