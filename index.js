require('dotenv').config();
const twilio = require('twilio');

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

/**
 * Função que envia mensagem via WhatsApp (Twilio Sandbox)
 */
async function enviarMensagem(mensagem) {
  try {
    const msg = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM, // Sandbox: whatsapp:+14155238886
      to: process.env.TWILIO_WHATSAPP_TO,     // whatsapp:+55XXXXXXXXXXX (número do seu pai)
      body: mensagem
    });
    console.log("Mensagem enviada com sucesso:", msg.sid);
  } catch (err) {
    console.error("Erro ao enviar mensagem:", err.message);
  }
}

/**
 * Função que verifica lembretes
 */
function verificarLembretes() {
  const hoje = new Date();
  const diaSemana = hoje.getDay(); // 0 = domingo, 4 = quinta-feira

  // 📌 Lembrete fixo toda sexta-feira
  if (diaSemana === 5) {
    enviarMensagem("📅 Lembrete: PEDIDO DO BOLO CAÇAROLA");
  }

  // 📌 Lembretes de exames (ano, mês-1, dia)
  const exames = [
    new Date(2025, 7, 13), // 10 de agosto 2025
  ];

  exames.forEach(data => {
    if (
      data.getDate() === hoje.getDate() &&
      data.getMonth() === hoje.getMonth() &&
      data.getFullYear() === hoje.getFullYear()
    ) {
      enviarMensagem("🏥 Lembrete: Exame marcado para amanhã!");
    }
  });
}

// Executa verificação
verificarLembretes();
