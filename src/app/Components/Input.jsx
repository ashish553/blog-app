import React from 'react'

function Input({name, id, title, className, type, value, onchange, labelClass}) {
    return (
        <div className={"inputField relative mt-6" + ` ${className}`}>
            <input type={type} name={name} id={id} className={'w-full py-2 border-b border-gray-400 peer outline-none text-base font-light'} required value={value} onChange={onchange}/>
            <label htmlFor={name} className={`transition ease-in-out left-0 absolute bottom-4 text-sm font-light peer-focus:-translate-y-5 peer-valid:-translate-y-5 text-gray-400 ${labelClass || 'peer-focus:text-black peer-valid:text-black'}`}>{title}</label>
        </div>
    )
}

export default Input