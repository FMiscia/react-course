import { ContactModel } from '../types'
import Button from './Button'
import './ContactCard.css'

function ContactCard(props: ContactCardProps) {
    return (
        <div className="App-ContactCard">
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p className="ContactCardNotes">{props.notes}</p>
            <Button label="Email" />
        </div>
    )
}

type ContactCardProps = ContactModel

export default ContactCard
