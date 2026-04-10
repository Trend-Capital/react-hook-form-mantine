import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  type ChipGroupProps as $ChipGroupProps,
  ChipGroup as $ChipGroup,
  type Primitive,
} from "@mantine/core";

export type ChipGroupProps<
  T extends FieldValues,
  V extends Primitive = string,
> = UseControllerProps<T> &
  Omit<$ChipGroupProps<boolean, V>, "value" | "defaultValue">;

export const ChipGroup = <T extends FieldValues, V extends Primitive = string>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ChipGroupProps<T, V>) => {
  const {
    field: { value, onChange: fieldOnChange, ref, ...field },
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$ChipGroup<boolean, V>
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
