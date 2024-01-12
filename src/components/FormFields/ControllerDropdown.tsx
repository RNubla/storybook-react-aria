import { Control, Controller } from "react-hook-form"
import { Select } from "../Select/Select"

interface ControllerDropdownProps {
    control: Control<T>
}

export const ControllerDropdown = ({ ...props }: ControllerDropdownProps) => {
    const { control } = props
    return (
        <Controller
            control={control}
            name="controllerDropdown"
            render={({ field }) => (
                <Select label="Select" options={[{ id: 0, title: "Call of Duty" }]} />
            )}
        />


    )
}