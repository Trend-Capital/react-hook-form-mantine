import { type Meta, type StoryObj } from "@storybook/react";
import { TagsInput } from "./TagsInput";

export default {
  title: "Components/TagsInput",
  component: TagsInput,
} satisfies Meta<typeof TagsInput>;

type Story = StoryObj<typeof TagsInput>;

export const Primary: Story = {
  args: {
    name: "test",
    label: "Your favorite ice cream flavors",
    placeholder: "Enter Flavor",
  },
  parameters: {
    form: {
      defaultValues: {
        test: null,
      },
    },
  },
};
