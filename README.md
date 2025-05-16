# React-Hook-Form-Mantine

React-Hook-Form-Mantine is a library that simplifies the integration of Mantine components with React Hook Form. By adding a "name" prop to Mantine components, the library seamlessly connects them to the corresponding form field.

## Getting Started

```bash
npm install @franzen-dev/react-hook-form-mantine
```

## Usage

### Import the entire library (legacy method)

```jsx
import { useForm } from 'react-hook-form';
import { TextInput, NumberInput } from '@franzen-dev/react-hook-form-mantine';

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

### Import individual components (recommended)

For better tree-shaking and optimized bundle size, you can import components directly:

```jsx
import { useForm } from 'react-hook-form';
import { TextInput } from '@franzen-dev/react-hook-form-mantine/TextInput';
import { NumberInput } from '@franzen-dev/react-hook-form-mantine/NumberInput';

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

## Available Components

- Autocomplete
- Checkbox & CheckboxGroup
- Chip & ChipGroup
- ColorInput & ColorPicker
- DateInput, DatePickerInput, DateTimePicker & YearPickerInput
- FileInput
- Input
- JsonInput
- MonthPickerInput
- MultiSelect
- NativeSelect
- NumberInput
- PasswordInput
- PinInput
- Radio & RadioGroup
- Rating
- SegmentedControl
- Select
- Slider
- Switch & SwitchGroup
- TagsInput
- TextInput
- Textarea
- TimeInput

## Attribution

Huge shout-out to @aranlucas for the original idea and implementation of this library; however, since that project has largely gone unmaintained for two years, including all attempts to create pull-requests to update dependencies, I decided to fork the project and update things myself.

You can see the original project here: [aranlucas/react-hook-form-mantine](https://github.com/aranlucas/react-hook-form-mantine)

## License

MIT
