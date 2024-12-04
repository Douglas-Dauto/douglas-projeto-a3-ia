import { Component } from "react";
import Header from "../../components/Header";
import MenuContacts from "../../components/MenuContacts";
import './styles.css';
import DownloadWhatsapp from "../../components/DownloadWhatsapp";
import MainChat from "../../components/MainChat";
export default class Home extends Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>

                <main>
                    <section>
                        <MenuContacts />
                    </section>

                    <section id="main-sec-home">
                        <MainChat />
                    </section>
                </main>
            </>
        );
    }
}