export default ({ value, setValue }) => {
    return (
        <input
            type="tel"
            pattern="[0-9]*"
            value={value}
            onChange={e => setValue(e.target.value)}
            className="appearance-none bg-color-200 pr-20 px-4 pt-10 pb-4 leading-none text-5xl font-thin text-gray-700 focus:text-black focus:bg-yellow-100 focus:outline-none"
        />
    )
}
