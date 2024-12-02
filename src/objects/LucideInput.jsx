'use client'
import { useField, SelectField } from '@payloadcms/ui'

export const LucideInput = ({ path, field, ...props }) => {
    const { value, setValue } = useField({ path })

    console.log(field, props)

    return (
        <div>
            <SelectField name={field?.name || 'icon'} value={value} onChange={setValue} path={path} />
            <select>
                {/* {props.field.options.map((option) => (
                    <option key={option.value} value={option.value} selected={option.value === value}>
                        {option.label}
                    </option>
                ))} */}
            </select>
        </div>
    )
}

export default LucideInput
