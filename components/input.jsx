import { useState } from 'react'

const formatPattern = /\B(?=(\d{3})+(?!\d))/g

const format = x => {
    return x.toString().replace(formatPattern, ',')
}

export default ({ value, setValue }) => {
    const [hasFocus, setHasFocus] = useState(false)

    return (
        <input
            type="text"
            value={hasFocus ? value : format(value)}
            onChange={e => setValue(e.target.value)}
            onFocus={e => setHasFocus(true)}
            onBlur={e => setHasFocus(false)}
            className="bg-color-200 border-b pr-20 px-4 pt-10 pb-4 leading-none text-5xl font-thin text-gray-700 focus:text-black focus:bg-yellow-100 focus:outline-none"
        />
    )
}
