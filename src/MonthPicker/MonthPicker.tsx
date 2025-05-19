import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  MonthPicker as $MonthPicker,
  type MonthPickerProps as $MonthPickerProps,
  type DatePickerType,
} from "@mantine/dates";

export type MonthPickerProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$MonthPickerProps<DatePickerType>, "value" | "defaultValue">;

export function MonthPicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: MonthPickerProps<T>) {
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
    <$MonthPicker
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
