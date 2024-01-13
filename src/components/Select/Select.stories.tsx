import { Meta, StoryObj } from "@storybook/react";
import { Item, Select } from ".";


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
const options = [
    { id: 1, flavor: "Chocolate" },
    { id: 2, flavor: "Vanilla" },
    { id: 3, flavor: "Strawberry" },
]
const params = {
    label: "Ice cream flavor",
    errorMsg: "Error",
    error: false,
}

export const Default: Story = {
    args: {
        label: "Ice cream flavor",
        errorMsg: "This is required",
        error: false
    }
}

export const ChildrenProp: Story = {
    args: {
        ...Default.args, children: [
            <Item>Chocolate</Item>,
            <Item>Vanilla</Item>,
            <Item>Strawberry</Item>,
        ]
    }
}

export const description: Story = {
    args: {
        ...ChildrenProp.args,
        description: "Select"
    }
}

export const ItemsProp: Story = {
    args: {
        ...Default.args
    },
    render: () => <Select items={options} {...params}>{(item) => <Item>{item.flavor}</Item>}</Select>
}