# 📅 AutoReminder 

Sistema automatizado para envio de lembretes via **WhatsApp** usando **Twilio Sandbox** e **GitHub Actions**.

Este projeto foi criado para enviar:
- ✅ Mensagem diária para manter o **Sandbox** ativo (`"."`)
- ✅ Lembrete semanal (toda **sexta-feira**)
- ✅ Lembrete de **consulta** no **dia anterior** ao exame agendado

---

## 🚀 Como Funciona

1. O **GitHub Actions** executa o script **2 vezes por dia**:
   - ⏰ 07h (horário de Brasília)
   - ⏰ 19h (horário de Brasília)
   
2. O script sempre envia **um ponto (`"."`)** para manter a janela de 24h do Twilio aberta.

3. Se for **sexta-feira**, envia também:

  - 📌 Lembrete semanal: tarefa importante hoje!

4. Se for **um dia antes da consulta** (ex.: exame no dia 13 → mensagem enviada dia 12), envia também:

  - 🏥 Lembrete de consulta amanhã.


---

## 🛠 Tecnologias Utilizadas
- **Node.js**
- **Twilio WhatsApp Sandbox**
- **GitHub Actions**



---

## ⚙️ Configuração

### 1. Criar conta no Twilio
- [https://www.twilio.com/](https://www.twilio.com/)
- Ativar **WhatsApp Sandbox**
- Seguir instruções para adicionar seu número no sandbox

### 2. Clonar este repositório
```
git clone https://github.com/seuusuario/autoreminder.git
cd autoreminder
```

### 3. Instalar dependências
```
npm install
```

### 4. Criar variáveis de ambiente no GitHub em:
```
Settings → Secrets and variables → Actions → New repository secret
```
Adicionar:
```
TWILIO_ACCOUNT_SID     ACxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN      xxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_WHATSAPP_FROM   whatsapp:+14155238886
TWILIO_WHATSAPP_TO     whatsapp:+55SEUNUMERO
```
---

## ▶️ Rodar localmente

```
node index.js
```
---

## ⚡ Execução Automática

O GitHub Actions roda automaticamente:

- **07h e 19h** → manda ponto (".") para manter vivo
- Se for sexta → manda lembrete semanal
- Se for dia anterior ao exame → manda lembrete de consulta amanhã

---

### Esse projeto foi desenvolvido por João Victor para fins de estudo.










