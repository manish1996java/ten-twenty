import { FC } from 'react'

const ProgressBar: FC<{ progressPercent: number }> = ({ progressPercent }) => {
    return (
        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-6">
            <div
                className="bg-blue-500 h-1.5 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
            />
        </div>
    )
}

export default ProgressBar