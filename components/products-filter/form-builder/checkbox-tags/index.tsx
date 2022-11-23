import React from 'react';
type CheckboxTagsType = {
	type?: string;
	name: string;
  valueName: string;
	onChange?: (value: string) => void;
}

const CheckboxTags = ({ name, type = 'checkbox', onChange, valueName }: CheckboxTagsType) => {
  const onSelect = (e: any) => {
    if(onChange) {
      onChange(e.target.getAttribute('data-name'));
    }
  }

  return (
    <label htmlFor={name} className={`checkbox-tags`}>
      <input onChange={onSelect} value={name} data-name={valueName} name={name} type={type} id={name} />
      <span className="checkbox__check">
        <span className="checkbox__tags" >{name}</span>
      </span>
    </label>
  )
};
  
export default CheckboxTags;