import { Group, Input, InputLabel } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherInputAttr }) => {
  return (
    <Group>
      <Input {...otherInputAttr} />
      {label && (
        <InputLabel shrink={otherInputAttr.value.length}>{label}</InputLabel>
      )}
    </Group>
  );
};

export default FormInput;
