import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

function Modal({ children, visible }: PropsWithChildren<{ visible?: boolean }>) {
    if (visible) {
        return (
            <div>
                {createPortal(
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            zIndex: 999,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.9)'
                        }}>
                        {children}
                    </div>,
                    document.body
                )}
            </div>
        )
    }

    return <div />
}

export default Modal
