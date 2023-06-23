import { ChangeEventHandler, ReactNode } from 'react'

interface IInputFileProps {
    children: ReactNode
    accept?: string
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

export const InputFile = ({ children, accept, onChange }: IInputFileProps) => {
    return (
        <label>
            {children}

            <input
                type={'file'}
                style={{ display: 'none' }}
                onChange={onChange}
                onClick={(event: React.MouseEvent<HTMLInputElement> & { target: any }) => {
                    // делаем reset значения для inputFile, чтобы можно было выбирать один и тот же фалй
                    event.target.value = null
                }}
                accept={accept}
            />
        </label>
    )
}
