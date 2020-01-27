export default ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="text-gray-600 block w-full py-2 uppercase font-semibold tracking-wide rounded border border-blue-500 text-blue-600 focus:outline-none"
    >
        {children}
    </button>
)
