import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  DatePicker as $DatePicker,
  type DatePickerType,
  type DatePickerProps as $DatePickerProps,
} from "@mantine/dates";

export type DatePickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$DatePickerProps<DatePickerType>, "value" | "defaultValue">;

export function DatePicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: DatePickerProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$DatePicker
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
