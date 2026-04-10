import {
  type CheckboxGroupProps as $CheckboxGroupProps,
  CheckboxGroup as $CheckboxGroup,
  type Primitive,
} from "@mantine/core";
import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";

export type CheckboxGroupProps<
  T extends FieldValues,
  V extends Primitive = string,
> = UseControllerProps<T> &
  Omit<$CheckboxGroupProps<V>, "checked" | "defaultValue">;

export const CheckboxGroup = <
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
}: CheckboxGroupProps<T, V>) => {
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
    <$CheckboxGroup<V>
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
};
