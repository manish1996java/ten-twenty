import React, { FC } from 'react'

interface PublicLayoutProps {
    children: React.ReactNode
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
    return (<>
        <div>{children}</div>
    </>
    )
}

export default PublicLayout