import { Component } from "react";
import './styles.css';
import ChatAreaWrite from "../ChatAreaWrite";
import ChatAreaMsg from "../ChatAreaMsg";
import DownloadWhatsapp from "../DownloadWhatsapp";

export default class MainChat extends Component {
    render() {
        return (
            <div className="container-chat">
                <div id="container-chat-area-msg-download-whatsapp">
                    <DownloadWhatsapp />
                </div>
                
                <div id="chat-area-write"></div>
            </div>
        );
    }
}