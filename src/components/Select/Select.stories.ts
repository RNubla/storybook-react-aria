import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta = {
    title: "Select",
    component: Select,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }

} satisfies Meta<typeof Select>

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        label: "Select",
        options: [{ id: 0, title: "Call of Duty" }],
        selectValue: "hi"
    }
}

export const Error: Story = {
    args: {
        label: "Error Example",
    }
}