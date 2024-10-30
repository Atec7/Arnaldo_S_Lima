document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('indicacaoForm');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const yourName = document.getElementById('yourName').value;
        const yourContact = document.getElementById('yourContact').value;
        const clientContact = document.getElementById('clientContact').value;
        const service = document.getElementById('service').value;

        const message = `Solicitação de Contato: \n Olá Arnaldo, Tudo bem?! \n Me chamo ${yourName} e faço parte da ${yourContact}\n O motivo do meu contato é para saber se você tem interesse no cargo de ${clientContact} \n Caso tenha gostaria de Agendar uma entrevista com você. \n Observações: ${service}`;
        const whatsappUrl = `https://wa.me/5564992952748?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    });
});