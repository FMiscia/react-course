import { ContactModel } from '../types'
import Button from './Button'
import Card from './Card'
import './ContactCard.css'

function ContactCard(props: ContactCardProps) {
    return (
        <Card className="App-ContactCard">
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p className="ContactCardNotes" style={{ flexGrow: 1 }}>
                {props.notes}
            </p>
            <Button label="Email" />
        </Card>
    )
}

type ContactCardProps = ContactModel

export default ContactCard
