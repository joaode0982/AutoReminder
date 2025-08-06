require('dotenv').config();
const twilio = require('twilio');

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Função de envio
async function enviarMensagem(texto) {
  try {
    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: process.env.TWILIO_WHATSAPP_TO,
      body: texto
    });
    console.log("Mensagem enviada:", message.sid);
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
  }
}

// Envia ponto para manter ativo
async function manterSandboxAtivo() {
  await enviarMensagem(".");
}

// Verifica e envia lembretes 
async function verificarLembretes() {
  const hoje = new Date();
  const diaSemana = hoje.getDay(); 
  const dataHoje = hoje.toISOString().split('T')[0]; 

  // Data do exame
  const dataExame = "2025-08-14";

  // Calcula um dia antes do exame
  const umDiaAntes = new Date(dataExame);
  umDiaAntes.setDate(umDiaAntes.getDate() - 1);
  const dataUmDiaAntes = umDiaAntes.toISOString().split('T')[0];

  // Se for sexta
  if (diaSemana === 5) {
    await enviarMensagem("📌 Lembrete: PEDIDO BOLO CAÇAROLA");
  }

  // Se for dia anterior ao exam
  if (dataHoje === dataUmDiaAntes) {
    await enviarMensagem("🏥 Lembrete de consulta amanhã.");
  }
}

// principal
async function main() {
  console.log("Iniciando execução...");

  // envia ponto para manter sandbox ativo
  await manterSandboxAtivo();

  // verifica lembretes
  await verificarLembretes();

  console.log("Execução concluída.");
}

main();
