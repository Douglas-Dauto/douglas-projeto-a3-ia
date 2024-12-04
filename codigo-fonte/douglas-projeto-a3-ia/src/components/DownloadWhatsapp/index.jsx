import { Component } from "react";
import desktop from '../../assets/img/processador-2.jpg';
import './styles.css';

export default class DownloadWhatsapp extends Component {
    render() {
        return (
            <div className="container-download-whatsapp">
                <div className="container-download-whatsapp__content-download-whatsapp">
                    <img src={desktop} alt="Desktop" className="container-download-whatsapp__desktop-image" />

                    <h1>Inteligência Artificial</h1>
                    <p>Escolha um assunto à esquerda e faça perguntas.</p>

                    <a href="#">Baixar o app</a>
                </div>
            </div>
        );
    }
}