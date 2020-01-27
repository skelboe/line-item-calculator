export default ({ error }) => (
    <div className="p-4">
        <span className="text-gray-500">
            Click on the refresh button on the right of the field you whish to calucalte.
        </span>
        {error ? <div className="text-red-500 mt-4">{error}</div> : null}
    </div>
)
