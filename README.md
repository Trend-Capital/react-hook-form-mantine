# React-Hook-Form-Mantine

React-Hook-Form-Mantine is a library that simplifies the integration of Mantine components with React Hook Form. By adding a "name" prop to Mantine components, the library seamlessly connects them to the corresponding form field.

## Getting Started

```bash
npm install @trendcapital/react-hook-form-mantine
```

## Basic Usage

```jsx
import { useForm } from "react-hook-form";
import { TextInput, NumberInput } from "@trendcapital/react-hook-form-mantine";

function MyForm() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name="username" label="Username" />
        <NumberInput name="age" label="Age" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
```

Optionally, without a `FormProvider`, you may pass the `control` prop:

```jsx
import { useForm } from "react-hook-form";
import { TextInput, NumberInput } from "@trendcapital/react-hook-form-mantine";

function MyForm() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput name="username" control={control} label="Username" />
      <NumberInput name="age" control={control} label="Age" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Input Name Assertion

```jsx
import { useForm } from "react-hook-form";
import { TextInput, NumberInput } from "@trendcapital/react-hook-form-mantine";

const schema = z.object({
  username: z.string().min(2).max(100),
  age: z.number().min(0).max(120),
});

type TFormInputs = z.infer<typeof schema>;

function MyForm() {
  const { control, handleSubmit } = useForm<TFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<TFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput<TFormInputs> name="username" label="Username" />
        <NumberInput<TFormInputs> name="age" label="Age" />

        {/* This one will show an error on the name prop */}
        <TextInput<TFormInputs> name="email" label="Email" />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
```

## InputBase Component Polymorphism

```jsx
import { useForm } from "react-hook-form";
import { TextInput, NumberInput } from "@trendcapital/react-hook-form-mantine";

const schema = z.object({
  agree: z.boolean(),
  age: z.number().min(0).max(120),
});

type TFormInputs = z.infer<typeof schema>;

function MyForm() {
  const { control, handleSubmit } = useForm<TFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<TFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Defaults to "input" component type */}
        <InputBase<TFormInputs> name="age" label="Age" placeholder="Enter your age" type="number" />

        <InputBase<TFormInputs, 'button'> name="agree" onClick={() => {
          console.log('All button props are allowed on this component')
        }} />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
```

## Available Components

- AngleSlider
- Autocomplete
- Checkbox
- CheckBoxGroup
- Chip
- ChipGroup
- ColorInput
- ColorPicker
- DateInput
- DatePicker
- DatePickerInput
- DateTimePicker
- FileInput
- Input
- InputBase (polymorphic component)
- JsonInput
- MiniCalendar
- MonthPicker
- MonthPickerInput
- MultiSelect
- NativeSelect
- NumberInput
- PasswordInput
- PinInput
- Radio
- RadioGroup
- Rating
- SegmentedControl
- Select
- Slider
- Switch
- SwitchGroup
- TagsInput
- Textarea
- TextInput
- TimeGrid
- TimeInput
- TimePicker
- YearPicker
- YearPickerInput

## Attribution

Huge shout-out to @aranlucas for the original idea and implementation of this library; however, since that project has largely gone unmaintained for two years, including all attempts to create pull-requests to update dependencies, I decided to fork the project and update things myself.

You can see the original project here: [aranlucas/react-hook-form-mantine](https://github.com/aranlucas/react-hook-form-mantine)

## License

MIT
