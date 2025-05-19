import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import {
  TagsInput as $TagsInput,
  type TagsInputProps as $TagsInputProps,
} from "@mantine/core";

export type TagsInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$TagsInputProps, "value" | "defaultValue">;

export function TagsInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TagsInputProps<T>) {
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
    <$TagsInput
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
