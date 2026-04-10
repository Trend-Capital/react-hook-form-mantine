import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  RadioGroup as $RadioGroup,
  type Primitive,
  type RadioGroupProps as $RadioGroupProps,
} from "@mantine/core";

export type RadioGroupProps<
  T extends FieldValues,
  V extends Primitive = string,
> = UseControllerProps<T> & Omit<$RadioGroupProps<V>, "value" | "defaultValue">;

export function RadioGroup<
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
}: RadioGroupProps<T, V>) {
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
    <$RadioGroup<V>
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
