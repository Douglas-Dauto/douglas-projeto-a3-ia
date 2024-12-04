export default function moveScrollMsg() {
    setTimeout(() => {
        window.document.getElementById('container-chat-area-msg-download-whatsapp').scrollTo(0, window.document.getElementById('container-chat-area-msg-download-whatsapp').scrollHeight);
    }, 10);
}
