import { Button, Group, Label, ListBox, Popover, Select as RSelect, SelectValue } from 'react-aria-components';
import { SelectOption } from './SelectOption';

interface SelectProps {
    /**
     * Title of the dropdown
     */
    label: string
    /**
     * The default text value when nothing is selected
     */
    selectValue?: string
    /**
     * List of options
     */
    options: []
}

export const Select = ({ label, options, ...props }: SelectProps) => {
    const { selectValue } = props
    return (
        <RSelect className="form-control w-[200px] max-w-xs">
            <Group className='label'>
                <Label className='label-text'>{label}</Label>
            </Group>
            <Button className='select select-primary select-bordered items-center '>
                <SelectValue>{selectValue ? selectValue : null}</SelectValue>
            </Button>
            <Popover className='w-[--trigger-width] bg-ligh shadow-xl  border-solid border-2 rounded-lg'>
                <ListBox renderEmptyState={() => 'There None'}>
                    {options.map((v, idx) => (
                        <SelectOption key={v.id}>{v.title}</SelectOption>
                    ))}
                </ListBox>
            </Popover>
        </RSelect>
    )
}