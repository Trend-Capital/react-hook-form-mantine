import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  SwitchGroup as $SwitchGroup,
  type Primitive,
  type SwitchGroupProps as $SwitchGroupProps,
} from "@mantine/core";

export type SwitchGroupProps<
  T extends FieldValues,
  V extends Primitive = string,
> = UseControllerProps<T> &
  Omit<$SwitchGroupProps<V>, "value" | "checked" | "defaultValue">;

export function SwitchGroup<
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
}: SwitchGroupProps<T, V>) {
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
    <$SwitchGroup<V>
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
