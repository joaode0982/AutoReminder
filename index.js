require('dotenv').config();
const axios = require('axios');

async function sendMessage(message) {
    const url = 'https://api.gupshup.io/sm/api/v1/msg';

    try {
        const res = await axios.post(
            url,
            new URLSearchParams({
                channel: 'whatsapp',
                source: process.env.SOURCE_NUMBER,
                destination: process.env.DESTINY,
                message: message,
                'src.name': 'autoreminder'
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'apikey': process.env.GUPSHUP_API_KEY
                }
            }
        );

        console.log('Mensagem enviada:', res.data);
    } catch (err) {
        console.error('Erro ao enviar mensagem:', err.response?.data || err.message);
    }
}

function checkReminder() {
    const today = new Date();
    const dayWeek =  today.getDay(); 

    // lembrete toda sexta
    if (dayWeek === 5) {
        sendMessage('Lembrete: PEDIDO BOLOOOO CAÇAROLACAÇAROLA 🥘');
    }

    // lista exames e consultas (ano, mes-1, dia
    const exams = [
        new Date(2025, 7, 13), // 13 de agosto 2025
    ];

    exams.forEach(data => {
        if (
            data.getDate() === today.getDate() &&
            data.getMonth() === today.getMonth() &&
            data.getFullYear() === today.getFullYear()
        ) {
            sendMessage('Lembrete: EXAME MARCADO PARA AMANHÃ 🏥');
        }
    });
}

checkReminder();