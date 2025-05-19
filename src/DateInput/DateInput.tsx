import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  DateInput as $DateInput,
  type DateInputProps as $DateInputProps,
} from "@mantine/dates";

export type DateInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$DateInputProps, "value" | "defaultValue">;

export function DateInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: DateInputProps<T>) {
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
    <$DateInput
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
