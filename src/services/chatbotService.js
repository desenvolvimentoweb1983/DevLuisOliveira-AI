
const knowledge = {
  barbearia: {
    servicos: "Oferecemos cortes masculinos, degradê, barba, acabamento e sobrancelha.",
    precos: "Nossos preços demonstrativos são: corte R$ 35, barba R$ 25 e corte + barba R$ 55.",
    horarios: "Nosso horário demonstrativo é de segunda a sábado, das 9h às 19h.",
    agendamento: "Para agendar, informe o serviço desejado e o melhor dia e horário."
  },

  restaurante: {
    cardapio: "Nosso cardápio demonstrativo inclui hambúrgueres, pratos executivos, massas, porções e bebidas.",
    precos: "Os preços demonstrativos variam de R$ 18 a R$ 45, dependendo do prato.",
    delivery: "Trabalhamos com pedidos para retirada e delivery demonstrativo.",
    horarios: "Funcionamos de segunda a sábado, das 11h às 22h."
  },

  loja: {
    produtos: "Temos roupas femininas e masculinas, camisetas, calças, vestidos e acessórios.",
    tamanhos: "Trabalhamos com diferentes tamanhos, conforme a disponibilidade de cada produto.",
    pagamentos: "Aceitamos Pix, dinheiro e cartões nas condições fictícias desta demonstração.",
    entrega: "As entregas e os prazos são informações demonstrativas."
  },

  clinica: {
    especialidades: "Nossa clínica demonstrativa apresenta atendimento em clínica geral, dermatologia, pediatria e cardiologia.",
    consultas: "As consultas são realizadas mediante agendamento.",
    horarios: "Nosso horário demonstrativo é de segunda a sexta, das 8h às 18h.",
    agendamento: "Para solicitar um agendamento demonstrativo, informe a especialidade e o melhor horário."
  }
};

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function getBotResponse(businessId, message) {
  const text = normalize(message);
  const business = knowledge[businessId];

  if (!business) {
    return "Desculpe, não consegui identificar este assistente.";
  }

  if (
    text.includes("oi") ||
    text.includes("ola") ||
    text.includes("bom dia") ||
    text.includes("boa tarde") ||
    text.includes("boa noite")
  ) {
    return "Olá! Seja bem-vindo(a)! 😊 Como posso ajudar você hoje?";
  }

  if (
    text.includes("preco") ||
    text.includes("valor") ||
    text.includes("custa") ||
    text.includes("quanto")
  ) {
    return business.precos || "Entre em contato para consultar os valores demonstrativos.";
  }

  if (
    text.includes("horario") ||
    text.includes("funciona") ||
    text.includes("abre") ||
    text.includes("fecha")
  ) {
    return business.horarios || "Consulte nossos horários de atendimento demonstrativos.";
  }

  if (
    text.includes("agendar") ||
    text.includes("agendamento") ||
    text.includes("marcar") ||
    text.includes("consulta") ||
    text.includes("reserva")
  ) {
    return business.agendamento || business.consultas || "Posso ajudar você com informações sobre agendamentos.";
  }

  if (
    text.includes("servico") ||
    text.includes("corte") ||
    text.includes("barba")
  ) {
    return business.servicos || "Consulte nossos serviços demonstrativos.";
  }

  if (
    text.includes("cardapio") ||
    text.includes("comida") ||
    text.includes("prato") ||
    text.includes("hamburguer")
  ) {
    return business.cardapio || "Confira nossas opções demonstrativas.";
  }

  if (
    text.includes("delivery") ||
    text.includes("entrega")
  ) {
    return business.delivery || business.entrega || "Consulte nossas opções demonstrativas de entrega.";
  }

  if (
    text.includes("produto") ||
    text.includes("roupa") ||
    text.includes("camiseta") ||
    text.includes("vestido")
  ) {
    return business.produtos || "Consulte nossos produtos demonstrativos.";
  }

  if (text.includes("tamanho")) {
    return business.tamanhos || "Consulte os tamanhos disponíveis na demonstração.";
  }

  if (
    text.includes("pagamento") ||
    text.includes("pix") ||
    text.includes("cartao")
  ) {
    return business.pagamentos || "Consulte as formas de pagamento demonstrativas.";
  }

  if (
    text.includes("especialidade") ||
    text.includes("medico") ||
    text.includes("medica") ||
    text.includes("clinica")
  ) {
    return business.especialidades || "Consulte nossas especialidades demonstrativas.";
  }

  if (
    text.includes("endereco") ||
    text.includes("localizacao") ||
    text.includes("onde fica")
  ) {
    return "O endereço desta empresa é fictício nesta demonstração. Entre em contato para conhecer uma futura implementação personalizada.";
  }

  if (text.includes("obrigado") || text.includes("obrigada")) {
    return "Por nada! 😊 Estou à disposição para ajudar.";
  }

  return "Entendi! 😊 Posso ajudar com informações sobre nossos serviços, preços, horários e atendimento. O que você gostaria de saber?";
}
