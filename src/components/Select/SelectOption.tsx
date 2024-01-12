import { ListBoxItem } from "react-aria-components"

interface SelectOptionProps {
    // value: string
    children: React.ReactNode
}

export const SelectOption = ({ ...props }: SelectOptionProps) => {
    const { children } = props
    return (
        <ListBoxItem className='focus:bg-blue-400 outline-none p-1'>{children}</ListBoxItem>
    )
}