import { Button, Group, Label, ListBox, Popover, Select as RSelect, SelectValue } from 'react-aria-components';
import { SelectOption } from './SelectOption';

interface SelectProps {
    label: string
    options: []
}

export const Select = ({ label, options, ...props }: SelectProps) => {
    return (
        <RSelect className="form-control w-[200px] max-w-xs">
            <Group className='label'>
                <Label className='label-text'>{label}</Label>
            </Group>
            <Button className='select select-primary select-bordered items-center '>
                <SelectValue />
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