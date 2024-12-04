import { Component } from 'react';
import './styles.css';
import HeaderSecContacts from '../../components/HeaderSecContacts';
import HeaderSecChat from '../HeaderSecChat';

export default class Header extends Component {
    render() {
        return (
            <>
                <section>
                    <HeaderSecContacts />
                </section>
                
                <section id="header-sec-chat"></section>
            </>
        );
    }
}
