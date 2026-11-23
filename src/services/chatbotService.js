
const restaurantMenu = {
  "Hambúrgueres": [
    {
      name: "X-Burger",
      description: "Pão, hambúrguer artesanal, queijo e molho especial.",
      price: 28
    },
    {
      name: "X-Salada",
      description: "Pão, hambúrguer artesanal, queijo, alface, tomate e molho especial.",
      price: 32
    },
    {
      name: "X-Bacon",
      description: "Pão, hambúrguer artesanal, queijo, bacon crocante e molho especial.",
      price: 36
    },
    {
      name: "Sabor Especial",
      description: "Pão brioche, dois hambúrgueres, queijo cheddar, bacon e molho da casa.",
      price: 42
    }
  ],

  "Pratos executivos": [
    {
      name: "Frango grelhado",
      description: "Filé de frango grelhado, arroz, feijão, salada e batata frita.",
      price: 29
    },
    {
      name: "Carne acebolada",
      description: "Carne acebolada, arroz, feijão, salada e batata frita.",
      price: 34
    },
    {
      name: "Filé de frango à parmegiana",
      description: "Filé de frango empanado, molho de tomate, queijo, arroz e batata frita.",
      price: 36
    },
    {
      name: "Bife acebolado",
      description: "Bife bovino, cebola, arroz, feijão e salada.",
      price: 35
    }
  ],

  "Massas": [
    {
      name: "Espaguete à bolonhesa",
      description: "Espaguete com molho de tomate e carne moída.",
      price: 32
    },
    {
      name: "Macarrão ao molho branco",
      description: "Massa com molho branco cremoso e queijo.",
      price: 34
    },
    {
      name: "Lasanha à bolonhesa",
      description: "Massa em camadas, molho bolonhesa e queijo gratinado.",
      price: 39
    }
  ],

  "Porções": [
    {
      name: "Batata frita",
      description: "Porção de batatas fritas crocantes.",
      price: 25
    },
    {
      name: "Batata com cheddar e bacon",
      description: "Batatas fritas cobertas com cheddar e bacon.",
      price: 39
    },
    {
      name: "Frango à passarinho",
      description: "Frango temperado e frito, acompanhado de molho especial.",
      price: 42
    }
  ],

  "Bebidas": [
    {
      name: "Refrigerante lata",
      description: "Lata de refrigerante de 350 ml.",
      price: 7
    },
    {
      name: "Suco natural",
      description: "Suco natural de laranja ou limão.",
      price: 9
    },
    {
      name: "Água mineral",
      description: "Garrafa de água mineral de 500 ml.",
      price: 5
    },
    {
      name: "Refrigerante 2 litros",
      description: "Garrafa de refrigerante de 2 litros.",
      price: 13
    }
  ]
};

const knowledge = {
  barbearia: {
    servicos: "Oferecemos cortes masculinos, degradê, barba, acabamento e sobrancelha.",
    precos: "Nossos preços demonstrativos são: corte R$ 35, barba R$ 25 e corte + barba R$ 55.",
    horarios: "Nosso horário demonstrativo é de segunda a sábado, das 9h às 19h.",
    agendamento: "Para agendar, informe o serviço desejado e o melhor dia e horário."
  },

  restaurante: {
    horarios: "Nosso horário demonstrativo é de segunda a sábado, das 11h às 22h.",
    delivery: "Oferecemos delivery demonstrativo e pedidos para retirada. Consulte a disponibilidade e a taxa de entrega na simulação.",
    pagamentos: "Na demonstração, aceitamos Pix, dinheiro e cartões.",
    endereco: "O endereço do Restaurante Sabor é fictício nesta demonstração."
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
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatPrice(price) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function getFullMenu() {
  let response = "🍽️ CARDÁPIO COMPLETO — RESTAURANTE SABOR\n";
  response += "━━━━━━━━━━━━━━━━━━━━\n\n";

  for (const [category, items] of Object.entries(restaurantMenu)) {
    response += `📌 ${category.toUpperCase()}\n\n`;

    for (const item of items) {
      response += `${item.name} — ${formatPrice(item.price)}\n`;
      response += `${item.description}\n\n`;
    }
  }

  response += "━━━━━━━━━━━━━━━━━━━━\n";
  response += "Todos os pratos, preços e produtos são fictícios e fazem parte desta demonstração.\n\n";
  response += "Gostaria de conhecer alguma categoria ou simular um pedido? 😊";

  return response;
}

function getCategoryMenu(category) {
  const items = restaurantMenu[category];

  if (!items) return null;

  let response = `🍽️ ${category.toUpperCase()}\n\n`;

  for (const item of items) {
    response += `**${item.name}** — ${formatPrice(item.price)}\n`;
    response += `${item.description}\n\n`;
  }

  response += "Os produtos e valores são fictícios, exclusivamente para demonstração.";

  return response;
}

function findRestaurantItem(text) {
  for (const items of Object.values(restaurantMenu)) {
    for (const item of items) {
      const itemName = normalize(item.name);

      if (text.includes(itemName)) {
        return item;
      }
    }
  }

  return null;
}

function getRestaurantResponse(message) {
  const text = normalize(message);

  const isGreeting =
    /^(oi|ola|bom dia|boa tarde|boa noite|tudo bem)$/.test(text);

  if (isGreeting) {
    return "Olá! Seja bem-vindo(a) ao Restaurante Sabor! 🍽️\n\nPosso apresentar nosso cardápio, informar preços, explicar os pratos ou ajudar você a simular um pedido. Como posso ajudar?";
  }

  if (
    text.includes("cardapio") ||
    text.includes("mostrar") ||
    text.includes("me mostra") ||
    text.includes("mostre") ||
    text.includes("ver os pratos") ||
    text.includes("quero ver")
  ) {
    return getFullMenu();
  }

  if (
    text.includes("pratos executivos") ||
    text.includes("prato executivo") ||
    text.includes("almoco") ||
    text.includes("comida")
  ) {
    return getCategoryMenu("Pratos executivos");
  }

  if (
    text.includes("hamburguer") ||
    text.includes("lanche") ||
    text.includes("lanches")
  ) {
    return getCategoryMenu("Hambúrgueres");
  }

  if (
    text.includes("massa") ||
    text.includes("massas") ||
    text.includes("macarrao") ||
    text.includes("lasanha")
  ) {
    return getCategoryMenu("Massas");
  }

  if (
    text.includes("porcao") ||
    text.includes("porcoes") ||
    text.includes("batata frita")
  ) {
    return getCategoryMenu("Porções");
  }

  if (
    text.includes("bebida") ||
    text.includes("bebidas") ||
    text.includes("refrigerante") ||
    text.includes("suco")
  ) {
    return getCategoryMenu("Bebidas");
  }

  const item = findRestaurantItem(text);

  if (item) {
    if (
      text.includes("ingrediente") ||
      text.includes("composicao") ||
      text.includes("acompanha") ||
      text.includes("vem com") ||
      text.includes("o que tem")
    ) {
      return `🍽️ ${item.name}\n\n${item.description}\n\nPreço demonstrativo: ${formatPrice(item.price)}.`;
    }

    return `🍽️ ${item.name}\n\n${item.description}\n\n💰 Preço demonstrativo: ${formatPrice(item.price)}.\n\nGostaria de conhecer outro prato ou simular um pedido?`;
  }

  if (
    text.includes("preco") ||
    text.includes("valor") ||
    text.includes("quanto custa") ||
    text.includes("quanto e")
  ) {
    return "Temos opções demonstrativas com preços variados:\n\n🍔 Hambúrgueres: de R$ 28 a R$ 42.\n🍛 Pratos executivos: de R$ 29 a R$ 36.\n🍝 Massas: de R$ 32 a R$ 39.\n🍟 Porções: de R$ 25 a R$ 42.\n🥤 Bebidas: de R$ 5 a R$ 13.\n\nQual prato você gostaria de consultar?\n\n*Valores fictícios para demonstração.*";
  }

  if (
    text.includes("pedido") ||
    text.includes("pedir") ||
    text.includes("comprar") ||
    text.includes("quero um") ||
    text.includes("quero uma")
  ) {
    return "Ótimo! 😋 Vamos simular seu pedido!\n\nQual prato você gostaria de pedir?\n\nVocê pode escolher um hambúrguer, prato executivo, massa, porção ou bebida.\n\nEsta é uma simulação: nenhum pedido real será enviado.";
  }

  if (
    text.includes("delivery") ||
    text.includes("entrega") ||
    text.includes("entregar") ||
    text.includes("retirada")
  ) {
    return "🚚 O Restaurante Sabor possui opções demonstrativas de delivery e retirada no estabelecimento.\n\nEm uma implementação real, o chatbot poderá consultar bairros atendidos, taxas e previsão de entrega.";
  }

  if (
    text.includes("pagamento") ||
    text.includes("pix") ||
    text.includes("cartao") ||
    text.includes("dinheiro")
  ) {
    return "💳 Na demonstração, as formas de pagamento são:\n\n• Pix\n• Dinheiro\n• Cartão de débito\n• Cartão de crédito\n\nEssas opções são fictícias e podem ser personalizadas em um projeto real.";
  }

  if (
    text.includes("horario") ||
    text.includes("funciona") ||
    text.includes("abre") ||
    text.includes("fecha")
  ) {
    return "🕒 Nosso horário demonstrativo é de segunda a sábado, das 11h às 22h.";
  }

  if (
    text.includes("endereco") ||
    text.includes("localizacao") ||
    text.includes("onde fica")
  ) {
    return "📍 O endereço do Restaurante Sabor é fictício nesta demonstração. Em um projeto personalizado, podemos configurar o endereço, mapa e localização real da empresa.";
  }

  if (
    text.includes("obrigado") ||
    text.includes("obrigada") ||
    text.includes("valeu")
  ) {
    return "Por nada! 😊 O Restaurante Sabor agradece sua visita. Se quiser conhecer mais opções, estou à disposição!";
  }

  return "Será um prazer ajudar! 😊\n\nPosso mostrar o cardápio completo, apresentar pratos executivos, hambúrgueres, massas, porções e bebidas, consultar preços ou simular um pedido.\n\nO que gostaria de conhecer?";
}

export function getBotResponse(businessId, message) {
  const text = normalize(message);
  const business = knowledge[businessId];

  if (!business) {
    return "Desculpe, não consegui identificar este assistente.";
  }

  if (!text) {
    return "Por favor, escreva sua mensagem para que eu possa ajudar.";
  }

  if (businessId === "restaurante") {
    return getRestaurantResponse(message);
  }

  if (/^(oi|ola|bom dia|boa tarde|boa noite)$/.test(text)) {
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

  return "Entendi! 😊 Posso ajudar com informações sobre nossos serviços, produtos, preços, horários e atendimento. O que você gostaria de saber?";
}
