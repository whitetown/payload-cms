import { Field, FieldClientComponent } from 'payload'
import LucideIcon, { lucideIcons } from './Lucide'
/*
const LucideIconField: FieldClientComponent = ({ path, value, onChange }) => {
    return (
       <div>
        <select
          id={path}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          style={{ marginBottom: '1rem', padding: '0.5rem', fontSize: '1rem' }}
        >
          <option value="" disabled>
            Select an icon
          </option>
          {lucideIcons.map((icon) => (
            <option key={icon} value={icon}>
              {icon}
            </option>
          ))}
        </select>
  
        {value && (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
            <LucideIcon name={value} size={24} />
            <span style={{ marginLeft: '0.5rem' }}>{value}</span>
          </div>
        )}
      </div>
    );
  };*/

export const IconField: Field = {
    name: 'icon', // Name of the field
    type: 'select', // Dropdown type
    options: lucideIcons.map((icon) => ({
        label: icon, // The label displayed in the dropdown
        value: icon, // The value stored in the database
    })),
    required: true, // Optional: Make the field required
    admin: {
        description: 'Choose a Lucide icon',
        isClearable: true,
        components: {
            // Field: LucideIconField
        },
    },
}
