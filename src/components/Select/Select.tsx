import { Button, FieldError, Group, Label, ListBox, ListBoxItem, Popover, Select as RSelect, SelectValue, Text } from 'react-aria-components';
import type { SelectProps, ValidationResult, ListBoxItemProps } from 'react-aria-components'
// import { SelectOption } from './SelectOption';

interface Props<T extends object> extends Omit<SelectProps<T>, 'children'> {
    /**
     * Title of the dropdown
     */
    label: string
    /**
     * List of options. This is a static collection, which can be used when the full list of options is known ahead of time
     */
    children?: React.ReactNode | ((item: T) => React.ReactNode)
    /**
     * Dynamic list of options. This can be used when the options come from an external data source such as an API call, or update over time
     */
    items?: Iterable<T>;
    errorMsg: string
    /**
     * Error
     */
    error: boolean,
    description?: string;

}

export const Select = <T extends object>(
    { label, description, errorMsg, children, items, error, ...props }:
        Props<T>
) => {

    const colorVariants = {
        "primary": "select-primary",
        "error": "select-error"
    }
    return (
        <RSelect className="form-control w-[200px] max-w-xs">
            <Group className='label'>
                <Label className='label-text'>{label}</Label>
            </Group>
            <Button className={`select ${error ? colorVariants["error"] : colorVariants["primary"]} items-center`}>
                <SelectValue />
            </Button>
            {description && <Group className={'label'}>
                <Text className='label-text-alt' slot="description">{description}</Text>
            </Group>}
            {error && <Text className='text-error' slot='errorMessage'>{errorMsg}</Text>}
            <Popover className='z-10 w-[--trigger-width] bg-ligh shadow-xl  border-solid border-2 rounded-lg'>
                <ListBox items={items}>
                    {children}
                </ListBox>
            </Popover>
        </RSelect >
    )
}

export const Item = (props: ListBoxItemProps) => {
    return (
        <ListBoxItem {...props} />
    )
}
