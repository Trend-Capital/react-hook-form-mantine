import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  TimeGrid as $TimeGrid,
  type TimeGridProps as $TimeGridProps,
} from "@mantine/dates";

export type TimeGridProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TimeGridProps, "value" | "defaultValue">;

export function TimeGrid<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TimeGridProps<T>) {
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
    <$TimeGrid
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
}
