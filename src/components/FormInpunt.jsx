import { forwardRef } from "react";

const FormInpunt = forwardRef(({ type, name, placeholder, onChange, onBlur, children }, ref) => {
    return (
        <>
            <input type={type} name={name} placeholder={placeholder} ref={ref} onChange={onChange} onBlur={onBlur} />
            {children}
        </>
    )
});

export default FormInpunt;