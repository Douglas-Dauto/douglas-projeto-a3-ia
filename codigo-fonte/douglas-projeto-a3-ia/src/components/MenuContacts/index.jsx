import { Component } from "react";
import './styles.css';
import SearchContacts from "../SearchContacts";
import Contact from "../Contact";
import { contactsLenght } from '../Contact';

export default class MenuContacts extends Component {
    render() {
        const contactsId = [];

        for(let i = 0; i < contactsLenght; i++) {
            contactsId.push(i);
        }

        return (
            <div className="sec-menu">
                <section>
                    <SearchContacts />
                </section>

                <section>
                    {contactsId.map((id) => <Contact key={id} id={id} />)}
                </section>
            </div>
        );
    }
}