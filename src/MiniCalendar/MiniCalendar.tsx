import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  MiniCalendar as $MiniCalendar,
  type MiniCalendarProps as $MiniCalendarProps,
} from "@mantine/dates";

export type MiniCalendarProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$MiniCalendarProps, "value" | "defaultValue">;

export function MiniCalendar<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: MiniCalendarProps<T>) {
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
    <$MiniCalendar
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
