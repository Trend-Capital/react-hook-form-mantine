import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  InputBase as $InputBase,
  type InputBaseProps as $InputBaseProps,
} from "@mantine/core";

export type InputBaseProps<T extends FieldValues> = UseControllerProps<T> &
  $InputBaseProps;

export function InputBase<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: InputBaseProps<T>) {
  const {
    field: { value, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$InputBase
      value={value}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}
