import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  MultiSelect as $MultiSelect,
  type Primitive,
  type MultiSelectProps as $MultiSelectProps,
} from "@mantine/core";

export type MultiSelectProps<
  T extends FieldValues,
  V extends Primitive = string,
> = UseControllerProps<T> &
  Omit<$MultiSelectProps<V>, "value" | "defaultValue">;

export function MultiSelect<
  T extends FieldValues,
  V extends Primitive = string,
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: MultiSelectProps<T, V>) {
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
    <$MultiSelect<V>
      value={value}
      onChange={(val) => {
        fieldOnChange(val);
        onChange?.(val);
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}
