
/* =========================================================
   DEVLUISOLIVEIRA AI
   Serviço de respostas dos quatro assistentes virtuais

   Restaurante Sabor: implementação preservada.
   Demais assistentes: atendimento aprimorado.
   Todos os dados são fictícios para demonstração.
========================================================= */


/* =========================================================
   1. CARDÁPIO — RESTAURANTE SABOR
   Mantido conforme a implementação original.
========================================================= */

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


/* =========================================================
   2. INFORMAÇÕES DOS NEGÓCIOS
========================================================= */

const knowledge = {
  barbearia: {
    servicos:
      "Oferecemos cortes masculinos, degradê, barba, acabamento e sobrancelha.",

    precos:
      "Nossos preços demonstrativos são: corte R$ 35, barba R$ 25 e corte + barba R$ 55.",

    horarios:
      "Nosso horário demonstrativo é de segunda a sábado, das 9h às 19h.",

    agendamento:
      "Para agendar, informe o serviço desejado e o melhor dia e horário."
  },

  restaurante: {
    horarios:
      "Nosso horário demonstrativo é de segunda a sábado, das 11h às 22h.",

    delivery:
      "Oferecemos delivery demonstrativo e pedidos para retirada. Consulte a disponibilidade e a taxa de entrega na simulação.",

    pagamentos:
      "Na demonstração, aceitamos Pix, dinheiro e cartões.",

    endereco:
      "O endereço do Restaurante Sabor é fictício nesta demonstração."
  },

  loja: {
    produtos:
      "Temos roupas femininas e masculinas, camisetas, calças, vestidos e acessórios.",

    tamanhos:
      "Trabalhamos com diferentes tamanhos, conforme a disponibilidade de cada produto.",

    pagamentos:
      "Aceitamos Pix, dinheiro e cartões nas condições fictícias desta demonstração.",

    entrega:
      "As entregas e os prazos são informações demonstrativas."
  },

  clinica: {
    especialidades:
      "Nossa clínica demonstrativa apresenta atendimento em clínica geral, dermatologia, pediatria e cardiologia.",

    consultas:
      "As consultas são realizadas mediante agendamento.",

    horarios:
      "Nosso horário demonstrativo é de segunda a sexta, das 8h às 18h.",

    agendamento:
      "Para solicitar um agendamento demonstrativo, informe a especialidade e o melhor horário."
  }
};


/* =========================================================
   3. CATÁLOGO — BARBEARIA PREMIUM
========================================================= */

const barberServices = [
  {
    name: "Corte masculino",
    description: "Corte tradicional personalizado de acordo com seu estilo.",
    price: 35
  },
  {
    name: "Corte degradê",
    description: "Corte moderno com transição gradual nas laterais.",
    price: 40
  },
  {
    name: "Barba",
    description: "Aparação, desenho e acabamento da barba.",
    price: 25
  },
  {
    name: "Corte + barba",
    description: "Combinação de corte masculino e acabamento completo da barba.",
    price: 55
  },
  {
    name: "Sobrancelha",
    description: "Limpeza e acabamento das sobrancelhas.",
    price: 15
  },
  {
    name: "Acabamento",
    description: "Ajuste de contornos e acabamento do corte.",
    price: 15
  }
];

function getBarberServices() {
  let response = "💈 SERVIÇOS — BARBEARIA PREMIUM\n";
  response += "━━━━━━━━━━━━━━━━━━━━\n\n";

  for (const service of barberServices) {
    response += `${service.name} — ${formatPrice(service.price)}\n`;
    response += `${service.description}\n\n`;
  }

  response += "━━━━━━━━━━━━━━━━━━━━\n";
  response += "Valores fictícios para demonstração.\n\n";
  response += "Qual serviço você gostaria de conhecer melhor?";

  return response;
}

function findBarberService(text) {
  const aliases = {
    "corte masculino": ["corte masculino", "corte tradicional"],
    "corte degradê": ["degrade", "corte degradê", "corte fade"],
    "Barba": ["barba", "fazer a barba"],
    "Corte + barba": ["corte e barba", "corte + barba", "corte com barba"],
    "Sobrancelha": ["sobrancelha"],
    "Acabamento": ["acabamento", "pezinho", "contorno"]
  };

  return barberServices.find((service) => {
    const names = aliases[service.name] || [service.name];

    return names.some((name) => text.includes(normalize(name)));
  });
}

function getBarberResponse(message) {
  const text = normalize(message);

  if (
    text.includes("servico") ||
    text.includes("servicos") ||
    text.includes("o que voces fazem") ||
    text.includes("o que oferece")
  ) {
    return getBarberServices();
  }

  const service = findBarberService(text);

  if (service) {
    return (
      `💈 ${service.name}\n\n` +
      `${service.description}\n\n` +
      `💰 Preço demonstrativo: ${formatPrice(service.price)}.\n\n` +
      "Gostaria de consultar outro serviço ou simular um agendamento?"
    );
  }

  if (
    text.includes("preco") ||
    text.includes("precos") ||
    text.includes("valor") ||
    text.includes("quanto custa") ||
    text.includes("quanto e")
  ) {
    return getBarberServices();
  }

  if (
    text.includes("agendar") ||
    text.includes("agendamento") ||
    text.includes("marcar") ||
    text.includes("reservar")
  ) {
    return (
      "📅 Vamos simular seu agendamento na Barbearia Premium!\n\n" +
      "Para começar, informe:\n\n" +
      "1. Qual serviço deseja realizar?\n" +
      "2. Qual dia seria melhor para você?\n" +
      "3. Qual horário prefere?\n\n" +
      "Com essas informações podemos demonstrar como funcionaria um sistema de agendamento personalizado.\n\n" +
      "Esta é apenas uma simulação. Nenhum horário real será reservado."
    );
  }

  if (
    text.includes("horario") ||
    text.includes("funciona") ||
    text.includes("abre") ||
    text.includes("fecha")
  ) {
    return (
      "🕒 HORÁRIO DE ATENDIMENTO\n\n" +
      "Segunda a sábado: das 9h às 19h.\n\n" +
      "Horários fictícios para esta demonstração."
    );
  }

  if (
    text.includes("endereco") ||
    text.includes("localizacao") ||
    text.includes("onde fica")
  ) {
    return (
      "📍 O endereço da Barbearia Premium é fictício nesta demonstração.\n\n" +
      "Em um projeto real, podemos incluir endereço, mapa e localização da barbearia."
    );
  }

  if (
    text.includes("pagamento") ||
    text.includes("pix") ||
    text.includes("cartao") ||
    text.includes("dinheiro")
  ) {
    return (
      "💳 FORMAS DE PAGAMENTO\n\n" +
      "Na demonstração, trabalhamos com:\n\n" +
      "• Pix\n" +
      "• Dinheiro\n" +
      "• Cartão de débito\n" +
      "• Cartão de crédito\n\n" +
      "Informações fictícias para demonstração."
    );
  }

  if (
    text.includes("degrade") ||
    text.includes("fade") ||
    text.includes("cabelo") ||
    text.includes("corte")
  ) {
    return (
      "💈 Temos opções de cortes tradicionais, degradê e acabamentos personalizados.\n\n" +
      "Posso apresentar os serviços e valores da Barbearia Premium. Qual estilo você procura?"
    );
  }

  if (
    text.includes("obrigado") ||
    text.includes("obrigada") ||
    text.includes("valeu")
  ) {
    return "Obrigado pela visita! 😊 A Barbearia Premium agradece seu contato. Quando quiser, estarei por aqui!";
  }

  return (
    "Olá! 💈 Será um prazer atender você na Barbearia Premium.\n\n" +
    "Posso ajudar com:\n\n" +
    "✂️ Cortes e estilos\n" +
    "🧔 Serviços de barba\n" +
    "💰 Preços\n" +
    "🕒 Horários de atendimento\n" +
    "📅 Simulação de agendamento\n\n" +
    "O que gostaria de conhecer?"
  );
}


/* =========================================================
   4. CATÁLOGO — LOJA FASHION
========================================================= */

const fashionProducts = [
  {
    name: "Camiseta básica",
    category: "Camisetas",
    description: "Camiseta casual de tecido confortável, ideal para o dia a dia.",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Branco", "Azul"],
    price: 49.90
  },
  {
    name: "Camiseta estampada",
    category: "Camisetas",
    description: "Camiseta moderna com estampa exclusiva demonstrativa.",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Branco"],
    price: 59.90
  },
  {
    name: "Calça jeans",
    category: "Calças",
    description: "Calça jeans casual com modelagem moderna.",
    sizes: ["36", "38", "40", "42", "44"],
    colors: ["Azul", "Preto"],
    price: 129.90
  },
  {
    name: "Calça jogger",
    category: "Calças",
    description: "Calça confortável com estilo esportivo e casual.",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Cinza"],
    price: 99.90
  },
  {
    name: "Vestido casual",
    category: "Vestidos",
    description: "Vestido versátil para passeios e ocasiões informais.",
    sizes: ["P", "M", "G"],
    colors: ["Preto", "Rosa", "Azul"],
    price: 119.90
  },
  {
    name: "Vestido elegante",
    category: "Vestidos",
    description: "Vestido com visual sofisticado para ocasiões especiais.",
    sizes: ["P", "M", "G"],
    colors: ["Preto", "Vermelho"],
    price: 159.90
  },
  {
    name: "Jaqueta casual",
    category: "Jaquetas",
    description: "Jaqueta versátil para compor diferentes combinações.",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marrom"],
    price: 189.90
  },
  {
    name: "Bolsa feminina",
    category: "Acessórios",
    description: "Bolsa casual para complementar seu visual.",
    sizes: ["Único"],
    colors: ["Preto", "Marrom", "Bege"],
    price: 89.90
  }
];

function getFashionCatalog() {
  let response = "🛍️ CATÁLOGO — LOJA FASHION\n";
  response += "━━━━━━━━━━━━━━━━━━━━\n\n";

  for (const product of fashionProducts) {
    response += `${product.name} — ${formatPrice(product.price)}\n`;
    response += `${product.description}\n`;
    response += `Tamanhos: ${product.sizes.join(", ")}\n`;
    response += `Cores: ${product.colors.join(", ")}\n\n`;
  }

  response += "━━━━━━━━━━━━━━━━━━━━\n";
  response += "Produtos, preços e disponibilidade fictícios para demonstração.\n\n";
  response += "Qual produto chamou sua atenção? 😊";

  return response;
}

function findFashionProduct(text) {
  return fashionProducts.find((product) => {
    const name = normalize(product.name);

    return text.includes(name);
  });
}

function getFashionResponse(message) {
  const text = normalize(message);

  if (
    text.includes("catalogo") ||
    text.includes("produtos") ||
    text.includes("mostrar produtos") ||
    text.includes("quero ver")
  ) {
    return getFashionCatalog();
  }

  const product = findFashionProduct(text);

  if (product) {
    return (
      `🛍️ ${product.name}\n\n` +
      `${product.description}\n\n` +
      `💰 Preço demonstrativo: ${formatPrice(product.price)}\n\n` +
      `📏 Tamanhos: ${product.sizes.join(", ")}\n\n` +
      `🎨 Cores: ${product.colors.join(", ")}\n\n` +
      "Gostaria de consultar outro produto ou conhecer nossas formas de pagamento?"
    );
  }

  if (
    text.includes("camiseta") ||
    text.includes("camisetas")
  ) {
    const products = fashionProducts.filter(
      (item) => item.category === "Camisetas"
    );

    return formatFashionCategory("Camisetas", products);
  }

  if (
    text.includes("calca") ||
    text.includes("calcas") ||
    text.includes("jeans")
  ) {
    const products = fashionProducts.filter(
      (item) => item.category === "Calças"
    );

    return formatFashionCategory("Calças", products);
  }

  if (
    text.includes("vestido") ||
    text.includes("vestidos")
  ) {
    const products = fashionProducts.filter(
      (item) => item.category === "Vestidos"
    );

    return formatFashionCategory("Vestidos", products);
  }

  if (
    text.includes("jaqueta") ||
    text.includes("jaquetas")
  ) {
    const products = fashionProducts.filter(
      (item) => item.category === "Jaquetas"
    );

    return formatFashionCategory("Jaquetas", products);
  }

  if (
    text.includes("acessorio") ||
    text.includes("acessorios") ||
    text.includes("bolsa")
  ) {
    const products = fashionProducts.filter(
      (item) => item.category === "Acessórios"
    );

    return formatFashionCategory("Acessórios", products);
  }

  if (
    text.includes("tamanho") ||
    text.includes("numeração") ||
    text.includes("numeracao")
  ) {
    return (
      "📏 Trabalhamos com diferentes tamanhos, dependendo do produto.\n\n" +
      "Temos opções como P, M, G, GG e numerações específicas para algumas peças.\n\n" +
      "Qual produto você gostaria de consultar?"
    );
  }

  if (
    text.includes("cor") ||
    text.includes("cores")
  ) {
    return (
      "🎨 Temos produtos em diferentes cores, como preto, branco, azul, rosa, vermelho, cinza, marrom e bege.\n\n" +
      "A disponibilidade é fictícia nesta demonstração.\n\n" +
      "Qual peça você gostaria de conhecer?"
    );
  }

  if (
    text.includes("preco") ||
    text.includes("precos") ||
    text.includes("valor") ||
    text.includes("quanto custa")
  ) {
    return getFashionCatalog();
  }

  if (
    text.includes("disponibilidade") ||
    text.includes("disponivel") ||
    text.includes("estoque") ||
    text.includes("tem no estoque")
  ) {
    return (
      "📦 Posso demonstrar uma consulta de disponibilidade de produtos.\n\n" +
      "Informe o nome da peça, o tamanho e a cor desejados.\n\n" +
      "Os resultados desta demonstração não representam um estoque real."
    );
  }

  if (
    text.includes("comprar") ||
    text.includes("pedido") ||
    text.includes("pedir") ||
    text.includes("quero comprar")
  ) {
    return (
      "🛒 Vamos simular uma compra na Loja Fashion!\n\n" +
      "Para começar, escolha um produto do nosso catálogo.\n\n" +
      "Depois podemos demonstrar a seleção de tamanho, cor e quantidade.\n\n" +
      "Esta é uma simulação. Nenhuma compra real será realizada."
    );
  }

  if (
    text.includes("entrega") ||
    text.includes("frete") ||
    text.includes("prazo")
  ) {
    return (
      "🚚 Na demonstração, podemos simular opções de entrega e prazos.\n\n" +
      "Em um projeto real, o sistema poderá consultar o CEP, calcular o frete e apresentar a previsão de entrega."
    );
  }

  if (
    text.includes("pagamento") ||
    text.includes("pix") ||
    text.includes("cartao") ||
    text.includes("dinheiro")
  ) {
    return (
      "💳 FORMAS DE PAGAMENTO\n\n" +
      "Na demonstração, temos:\n\n" +
      "• Pix\n" +
      "• Dinheiro\n" +
      "• Cartão de débito\n" +
      "• Cartão de crédito\n\n" +
      "Informações fictícias para demonstração."
    );
  }

  if (
    text.includes("troca") ||
    text.includes("devolucao") ||
    text.includes("devolver")
  ) {
    return (
      "🔄 Em uma loja virtual personalizada, podemos configurar uma política de trocas e devoluções, com prazos, condições e orientações para os clientes.\n\n" +
      "As regras desta loja são fictícias nesta demonstração."
    );
  }

  if (
    text.includes("obrigado") ||
    text.includes("obrigada") ||
    text.includes("valeu")
  ) {
    return "A Loja Fashion agradece sua visita! 🛍️ Espero ter ajudado. Volte sempre!";
  }

  return (
    "Olá! Seja bem-vindo(a) à Loja Fashion! 🛍️\n\n" +
    "Posso ajudar você a conhecer:\n\n" +
    "👕 Camisetas e roupas\n" +
    "👖 Calças\n" +
    "👗 Vestidos\n" +
    "🎨 Cores e tamanhos\n" +
    "💰 Preços\n" +
    "📦 Disponibilidade e entregas\n" +
    "🛒 Simulação de compra\n\n" +
    "O que você gostaria de conhecer?"
  );
}

function formatFashionCategory(category, products) {
  let response = `🛍️ ${category.toUpperCase()} — LOJA FASHION\n\n`;

  for (const product of products) {
    response += `${product.name} — ${formatPrice(product.price)}\n`;
    response += `${product.description}\n`;
    response += `Tamanhos: ${product.sizes.join(", ")}\n`;
    response += `Cores: ${product.colors.join(", ")}\n\n`;
  }

  response += "Valores e disponibilidade fictícios para demonstração.";

  return response;
}


/* =========================================================
   5. CLÍNICA SAÚDE
========================================================= */

const clinicSpecialties = [
  {
    name: "Clínica geral",
    description: "Atendimento médico geral e avaliação inicial de saúde."
  },
  {
    name: "Dermatologia",
    description: "Atendimento relacionado à saúde da pele, cabelos e unhas."
  },
  {
    name: "Pediatria",
    description: "Atendimento médico voltado à saúde de crianças e adolescentes."
  },
  {
    name: "Cardiologia",
    description: "Atendimento especializado na saúde do coração e sistema cardiovascular."
  }
];

function getClinicSpecialties() {
  let response = "🏥 ESPECIALIDADES — CLÍNICA SAÚDE\n";
  response += "━━━━━━━━━━━━━━━━━━━━\n\n";

  for (const specialty of clinicSpecialties) {
    response += `${specialty.name}\n`;
    response += `${specialty.description}\n\n`;
  }

  response += "━━━━━━━━━━━━━━━━━━━━\n";
  response += "Especialidades fictícias para demonstração.\n\n";
  response += "Qual especialidade gostaria de conhecer?";

  return response;
}

function getClinicResponse(message) {
  const text = normalize(message);

  if (
    text.includes("especialidade") ||
    text.includes("especialidades") ||
    text.includes("medicos") ||
    text.includes("medico") ||
    text.includes("medica")
  ) {
    return getClinicSpecialties();
  }

  if (
    text.includes("dermatologia") ||
    text.includes("dermatologista")
  ) {
    return (
      "🩺 DERMATOLOGIA\n\n" +
      "A especialidade de dermatologia está disponível na demonstração da Clínica Saúde.\n\n" +
      "O atendimento é apresentado como exemplo de uma futura solução personalizada.\n\n" +
      "Gostaria de simular um agendamento?"
    );
  }

  if (
    text.includes("pediatria") ||
    text.includes("pediatra") ||
    text.includes("crianca")
  ) {
    return (
      "🩺 PEDIATRIA\n\n" +
      "A pediatria é uma das especialidades apresentadas na Clínica Saúde.\n\n" +
      "O atendimento demonstrativo é voltado à saúde de crianças e adolescentes.\n\n" +
      "Gostaria de simular um agendamento?"
    );
  }

  if (
    text.includes("cardiologia") ||
    text.includes("cardiologista") ||
    text.includes("coracao")
  ) {
    return (
      "🩺 CARDIOLOGIA\n\n" +
      "A cardiologia é uma das especialidades disponíveis na demonstração da Clínica Saúde.\n\n" +
      "Gostaria de conhecer as informações de atendimento ou simular um agendamento?"
    );
  }

  if (
    text.includes("clinica geral") ||
    text.includes("clinico geral")
  ) {
    return (
      "🩺 CLÍNICA GERAL\n\n" +
      "A clínica geral está disponível na demonstração da Clínica Saúde.\n\n" +
      "O atendimento representa um exemplo de consulta médica geral.\n\n" +
      "Gostaria de simular um agendamento?"
    );
  }

  if (
    text.includes("agendar") ||
    text.includes("agendamento") ||
    text.includes("marcar") ||
    text.includes("consulta") ||
    text.includes("reservar")
  ) {
    return (
      "📅 SIMULAÇÃO DE AGENDAMENTO — CLÍNICA SAÚDE\n\n" +
      "Vamos demonstrar como funcionaria o agendamento de uma consulta.\n\n" +
      "Por favor, informe:\n\n" +
      "1. Qual especialidade deseja consultar?\n" +
      "2. Qual dia seria melhor para você?\n" +
      "3. Qual horário prefere?\n\n" +
      "Essas informações permitem demonstrar o fluxo de atendimento.\n\n" +
      "Atenção: nenhum agendamento real será realizado."
    );
  }

  if (
    text.includes("horario") ||
    text.includes("funciona") ||
    text.includes("abre") ||
    text.includes("fecha")
  ) {
    return (
      "🕒 HORÁRIO DE ATENDIMENTO\n\n" +
      "Segunda a sexta-feira: das 8h às 18h.\n\n" +
      "Horário fictício para demonstração."
    );
  }

  if (
    text.includes("preco") ||
    text.includes("valor") ||
    text.includes("quanto custa") ||
    text.includes("convenio") ||
    text.includes("convenios")
  ) {
    return (
      "💳 Os valores e convênios da Clínica Saúde são fictícios nesta demonstração.\n\n" +
      "Em um projeto real, o assistente poderá apresentar preços de consultas, convênios aceitos e condições de atendimento configuradas pela clínica."
    );
  }

  if (
    text.includes("endereco") ||
    text.includes("localizacao") ||
    text.includes("onde fica")
  ) {
    return (
      "📍 O endereço da Clínica Saúde é fictício nesta demonstração.\n\n" +
      "Em uma implementação real, podemos adicionar endereço, mapa, localização e informações de como chegar."
    );
  }

  if (
    text.includes("documento") ||
    text.includes("documentos") ||
    text.includes("levar")
  ) {
    return (
      "📋 Para demonstrar as orientações de atendimento, podemos informar documentos necessários, como documento de identificação e informações do convênio, quando aplicável.\n\n" +
      "A lista definitiva deverá ser configurada pela clínica responsável."
    );
  }

  if (
    text.includes("urgencia") ||
    text.includes("emergencia") ||
    text.includes("passando mal") ||
    text.includes("dor forte")
  ) {
    return (
      "⚠️ Este assistente é apenas demonstrativo e não realiza avaliação médica ou atendimento de emergência.\n\n" +
      "Se você estiver enfrentando uma emergência médica, procure imediatamente um serviço de urgência ou ligue 192 (SAMU), no Brasil."
    );
  }

  if (
    text.includes("sintoma") ||
    text.includes("sintomas") ||
    text.includes("diagnostico") ||
    text.includes("remedio") ||
    text.includes("medicamento")
  ) {
    return (
      "ℹ️ A Clínica Saúde apresenta apenas uma demonstração de atendimento administrativo.\n\n" +
      "Este assistente não realiza diagnósticos, não prescreve medicamentos e não substitui a avaliação de um profissional de saúde.\n\n" +
      "Posso ajudar com informações sobre especialidades e simulação de agendamentos."
    );
  }

  if (
    text.includes("pagamento") ||
    text.includes("pix") ||
    text.includes("cartao")
  ) {
    return (
      "💳 As formas de pagamento são informações fictícias nesta demonstração.\n\n" +
      "Em um projeto real, podemos configurar as formas de pagamento aceitas pela clínica."
    );
  }

  if (
    text.includes("obrigado") ||
    text.includes("obrigada") ||
    text.includes("valeu")
  ) {
    return "A Clínica Saúde agradece seu contato! 😊 Estamos à disposição para apresentar nossas especialidades demonstrativas.";
  }

  return (
    "Olá! Seja bem-vindo(a) à Clínica Saúde! 🏥\n\n" +
    "Posso ajudar você com:\n\n" +
    "🩺 Especialidades médicas\n" +
    "📅 Simulação de agendamento\n" +
    "🕒 Horários de atendimento\n" +
    "📋 Orientações administrativas\n" +
    "📍 Informações da clínica\n\n" +
    "O que gostaria de conhecer?\n\n" +
    "Este assistente é demonstrativo e não substitui orientação médica."
  );
}


/* =========================================================
   6. FUNÇÕES GERAIS
========================================================= */

function normalize(text) {
  return String(text)
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


/* =========================================================
   7. RESTAURANTE SABOR
   Funções originais preservadas.
========================================================= */

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


/* =========================================================
   8. FUNÇÃO PRINCIPAL
   Direciona a mensagem para o assistente correto.
========================================================= */

export function getBotResponse(businessId, message) {
  const text = normalize(message);

  if (!text) {
    return "Por favor, escreva sua mensagem para que eu possa ajudar.";
  }

  if (!knowledge[businessId]) {
    return "Desculpe, não consegui identificar este assistente.";
  }

  if (businessId === "restaurante") {
    return getRestaurantResponse(message);
  }

  const isGreeting =
    /^(oi|ola|bom dia|boa tarde|boa noite|tudo bem|e ai|opa)$/.test(text);

  if (isGreeting) {
    const greetings = {
      barbearia:
        "Olá! Seja bem-vindo(a) à Barbearia Premium! 💈 Como posso ajudar você hoje?",

      loja:
        "Olá! Seja bem-vindo(a) à Loja Fashion! 🛍️ Como posso ajudar você hoje?",

      clinica:
        "Olá! Seja bem-vindo(a) à Clínica Saúde! 🏥 Como posso ajudar você hoje?"
    };

    return greetings[businessId] || "Olá! Como posso ajudar você hoje? 😊";
  }

  switch (businessId) {
    case "barbearia":
      return getBarberResponse(message);

    case "loja":
      return getFashionResponse(message);

    case "clinica":
      return getClinicResponse(message);

    default:
      return "Desculpe, não consegui identificar este assistente.";
  }
}
