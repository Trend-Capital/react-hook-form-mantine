import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  InputBase as $InputBase,
  type PolymorphicComponentProps,
  type InputBaseProps as $InputBaseProps,
} from "@mantine/core";

export type InputBaseProps<
  T extends FieldValues,
  C extends React.ElementType = "input",
> = UseControllerProps<T> & PolymorphicComponentProps<C, $InputBaseProps>;

export function InputBase<
  T extends FieldValues,
  C extends React.ElementType = "input",
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: InputBaseProps<T, C>) {
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
    <$InputBase<any>
      value={value}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}
