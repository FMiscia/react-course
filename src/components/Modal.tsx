import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

function Modal({ children, visible }: PropsWithChildren<{ visible?: boolean }>) {
    if (visible) {
        return <div>{createPortal(<div className="App-Modal">{children}</div>, document.body)}</div>
    }

    return <div />
}

export default Modal
