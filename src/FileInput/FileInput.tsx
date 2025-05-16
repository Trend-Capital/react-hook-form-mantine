import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  FileInput as $FileInput,
  type FileInputProps as $FileInputProps,
} from "@mantine/core";

// Create a type that properly handles the multiple prop
export type FileInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$FileInputProps<boolean>, "value" | "defaultValue">;

export function FileInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: FileInputProps<T>) {
  const { field, fieldState } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  // Extract value and original onChange to avoid them being passed twice
  const { value, onChange, ...restField } = field;

  return (
    <$FileInput
      value={value}
      error={fieldState.error?.message}
      onChange={(files) => {
        onChange(files);
      }}
      {...restField}
      {...props}
    />
  );
}
