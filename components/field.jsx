import Label from './label'
import Input from './input'
import Calculate from './calculate'

export default ({ value, setValue, children, onCalculate }) => (
    <div className="border-b border-gray-300 flex flex-col relative">
        <Label>{children}</Label>
        <Calculate onClick={onCalculate} />
        <Input value={value} setValue={setValue} />
    </div>
)
