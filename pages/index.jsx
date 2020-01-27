import { useState, useEffect } from 'react'
import Field from '../components/field'
import Help from '../components/help'
import Button from '../components/button'
import usePersistedState from '../components/use-persisted-state'

export default () => {
    const [budget, setBudget] = usePersistedState('budget', null)
    const [impressions, setImpressions] = usePersistedState('impressions', null)
    const [cpm, setCpm] = usePersistedState('cpm', null)
    const [error, setError] = useState('')

    // Reset errrors on changes
    useEffect(() => setError(''), [budget, impressions, cpm])

    const handleBudgetCalculate = e => {
        if (cpm <= 0 || impressions <= 0) {
            setError('Fill out CPM and impressions to calculate budget.')
            return
        }

        setBudget(Math.round((impressions / 1000) * cpm))
    }

    const handleImpressionsCalculate = e => {
        if (budget <= 0 || cpm <= 0) {
            setError('Fill out CPM and budget to calculate impressions.')
            return
        }

        setImpressions(Math.round((budget * 1000) / cpm))
    }

    const handleCpmCalculate = e => {
        if (budget <= 0 || impressions <= 0) {
            setError('Fill out budget and impressions to calculate CPM.')
            return
        }

        setCpm((budget / (impressions / 1000)).toFixed(2))
    }

    const handleOnReset = e => {
        setCpm('')
        setImpressions('')
        setBudget('')
    }

    return (
        <div className="bg-white h-screen">
            <div className="h-16 bg-gray-200 border-b border-gray-400 flex items-center justify-center w-100">
                <h1 className="text-xl">Line Order Calculator</h1>
            </div>
            <Field
                placeholder="40.000"
                value={budget}
                setValue={setBudget}
                onCalculate={handleBudgetCalculate}
            >
                Budget
            </Field>
            <Field
                placeholder="750.000"
                value={impressions}
                setValue={setImpressions}
                onCalculate={handleImpressionsCalculate}
            >
                Impressions
            </Field>
            <Field
                placeholder="53.33"
                value={cpm}
                setValue={setCpm}
                onCalculate={handleCpmCalculate}
            >
                CPM
            </Field>
            <div className="px-4 pt-4">
                <Button onClick={handleOnReset}>Reset</Button>
            </div>
            <Help error={error} />
        </div>
    )
}
