import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  Select as $Select,
  type Primitive,
  type SelectProps as $SelectProps,
} from "@mantine/core";

export type SelectProps<
  T extends FieldValues,
  V extends Primitive = string,
> = UseControllerProps<T> & Omit<$SelectProps<V>, "value" | "defaultValue">;

export function Select<T extends FieldValues, V extends Primitive = string>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: SelectProps<T, V>) {
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
    <$Select<V>
      value={value}
      onChange={(val, option) => {
        fieldOnChange(val);
        onChange?.(val, option);
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}
