import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  SegmentedControl as $SegmentedControl,
  type Primitive,
  type SegmentedControlProps as $SegmentedControlProps,
} from "@mantine/core";

export type SegmentedControlProps<
  T extends FieldValues,
  V extends Primitive = string,
> = UseControllerProps<T> &
  Omit<$SegmentedControlProps<V>, "values" | "defaultValues">;

export function SegmentedControl<
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
}: SegmentedControlProps<T, V>) {
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
    <$SegmentedControl<V>
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
