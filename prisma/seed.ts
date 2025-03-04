/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    await tx.babyShower.deleteMany();
    const babyShower = await tx.babyShower.create({
      data: {
        name: "Miguel",
        slug: "miguel",
        description:
          "Escolha um presentinho com carinho e faça parte desse momento tão especial.",
        avatarImageUrl: "https://i.imgur.com/SYktTvs.png",
        coverImageUrl:
          "https://fv5-2.files.fm/thumb_show.php?i=vxvvsrfnjx&view&v=1&PHPSESSID=1c126b51b595294d48ad4687eb8f66ce003d7bd7",
      },
    });
    const babyCategory = await tx.menuCategory.create({
      data: {
        name: "Lista do Bebe",
        babyId: babyShower.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Fralda Descartável",
          description:
            "A Fralda Descartável Premium Huggies Natural Care RN 34 ...",
          productStock: true,
          stockQuantity: 10,
          imageUrl: "https://m.media-amazon.com/images/I/7160DSpeqvL.jpg",
          menuCategoryId: babyCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "HIPOGLÓS® Creme Preventivo De Assaduras, 120g",
          description:
            "A nova fórmula do HIPOGLÓS®, com Óleo de Girassol e Vitamina E, forma uma barreira branca concentrada de longa duração que hidrata e ajuda a reduzir os sinais de vermelhidão, auxiliando na recuperação da pele** desde o primeiro uso. **por estimular a renovação celular natural. Sua fórmula é hipoalergênica, dermatologicamente testada, fácil de espalhar e seguro para ser usado desde os primeiros dias de vida",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/61Bd8ykzRoL.__AC_SY300_SX300_QL70_ML2_.jpg",
          menuCategoryId: babyCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Huggies Fralda Supreme Care M 196 Un",
          description:
            "A Supreme Care é a companhia perfeita para você que busca máxima proteção enquanto seu bebê se movimenta. Com uma suavidade mais macia do que nunca, especialmente na parte traseira, proporciona conforto e absorção ideais, mantendo seu bebê sempre sequinho. Graças à sua tecnologia exclusiva, a Supreme Care é a única com canais em formato de X, adaptando-se para oferecer mais liberdade de movimento, com uma anatomia que se adapta aos movimentos do seu bebê. ",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrv99AHAZvmphdONJoza95LxHrUG71svwEIgGmVj_6-vVPveA3GwPCauJZPZsR08Wvz0uLHArG8jH5w0TxBWryMTWRDzTSLZTLnDgX_VameP6z9X1tLkByuBzwlroV4dE4TbVN&usqp=CAc",
          menuCategoryId: babyCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Boia Bote Infantil Com Cobertura Baby Piscina Praia Crianças Inflável Premium",
          description:
            "Boia Bote Infantil Com Cobertura Baby Piscina Praia Crianças Inflável Premium - Azul",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/51t-w-KrlvL._AC_SL1050_.jpg",
          menuCategoryId: babyCategory.id,
          babyId: babyShower.id,
        },
      ],
    });
    const hygieneCategory = await tx.menuCategory.create({
      data: {
        name: "Higiene",

        babyId: babyShower.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Toalhas Umedecidas",
          description:
            "Pacote com 100 unidades de toalhas umedecidas hipoalergênicas, sem álcool e com extrato de camomila.",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/61TH-AyESKL._AC_SL1200_.jpg",
          menuCategoryId: hygieneCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Creme para Assaduras",
          description:
            "Pomada protetora com óxido de zinco para prevenir e tratar assaduras, dermatologicamente testada.",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/615lj9h9vXL._AC_SL1500_.jpg",
          menuCategoryId: hygieneCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Escova e Pente para Bebê",
          description:
            "Conjunto de escova de cerdas macias e pente com pontas arredondadas para cuidar dos cabelos do bebê.",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/41sSotauNsL._AC_SL1000_.jpg",
          menuCategoryId: hygieneCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Granado Sab Liquido Bebe Tradicional 500Ml",
          description:
            "Sab liquido bebe tradicional 500ml. Formulado com glicerina vegetal e ph da pele, o sabonete limpa com suavidade a pele do bebê, deixando-a macia e perfumada.",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/51dUPoy9NBL._AC_SL1000_.jpg",
          menuCategoryId: hygieneCategory.id,
          babyId: babyShower.id,
        },
      ],
    });
    const toysCategory = await tx.menuCategory.create({
      data: {
        name: "Brinquedos",

        babyId: babyShower.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Brinquedo Educativo, Caranguejo Fujao, Anda Com Sensor De Obstaculos",
          description:
            "O Brinquedo Caranguejo Fujão De Sensor Dança Com Som Eletrônico é um brinquedo elétrico de rastreamento com indução infravermelha. Quando encontra obstáculos durante o movimento, muda de direção. Este brinquedo interativo produz música dinâmica à medida que se move, o que pode ajudar no desenvolvimento auditivo da criança e ensinar ritmo. O Brinquedo tem 2 cores verde ou laranja, será enviado o que estiver disponível no momento. BENEFÍCIOS: Desperta atenção visual e auditiva, incentiva engatinhar e andar, desperta a curiosidade e atividades cerebrais, desenvolve a mobilidade e coordenação motora, ideal para todas as fases da infância, sensor de obstáculos. Especificação: Tipo de item: Brinquedo de caranguejo de com sensor Material: Plástico e componentes elétricos Quantidade: 1 peça Bateria: 3 pilhas AA (Não inclusas) alimentação: Pilhas Tamanho do produto: C22cm , A14cm L10,5cm Peso da embalagem: 300g",

          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/51aUOshjLnL._AC_SL1000_.jpg",
          menuCategoryId: toysCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "DM Toys Brinquedo Interativo Musical Mexe Danca Luz e Som Dancing Cachorro",
          description:
            "Robô Dancing da DM Toys é um divertido brinquedo musical, ele anda, mexe, remexe e acende luzes para a diversão da criançada.",

          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/51OqIvttMUL._AC_SL1000_.jpg",
          menuCategoryId: toysCategory.id,
          babyId: babyShower.id,
        },
      ],
    });
    // Nova Categoria: Roupas
    const clothesCategory = await tx.menuCategory.create({
      data: {
        name: "Roupas",
        babyId: babyShower.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Body Bebê Masculino",
          description: "Body de bebê 100% algodão, com estampas divertidas.",
          productStock: true,
          stockQuantity: 15,
          imageUrl:
            "https://m.media-amazon.com/images/I/51PA7e5XxEL._AC_SX522_.jpg",
          menuCategoryId: clothesCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Macacão Infantil",
          description:
            "Macacão de bebê, com fechamento em botões, para fácil troca.",
          productStock: true,
          stockQuantity: 8,
          imageUrl:
            "https://m.media-amazon.com/images/I/71riCkXALpL._AC_SX522_.jpg",
          menuCategoryId: clothesCategory.id,
          babyId: babyShower.id,
        },
      ],
    });

    // Nova Categoria: Alimentação
    const foodCategory = await tx.menuCategory.create({
      data: {
        name: "Alimentação",
        babyId: babyShower.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Mamadeira Anti-cólica",
          description:
            "Mamadeira com design anti-cólica, ideal para o bebê em seus primeiros meses.",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/51+lIzLoNQL._AC_SL1000_.jpg",
          menuCategoryId: foodCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Papapá, Papinha infantil, Orgânico, Sabor Maçã & Ameixa, 100g, Rosa",
          description:
            "A Papinha Infantil Orgânica La Chef, Sabor Maçã & Ameixa, da Papapá, é a escolha ideal para proporcionar uma alimentação saudável e nutritiva ao seu bebê. Feita com ingredientes orgânicos de alta qualidade, essa papinha combina o sabor delicioso de maçã e ameixa, garantindo uma refeição rica em fibras, vitaminas e minerais essenciais para o crescimento saudável do bebê. A embalagem prática e fácil de abrir facilita o preparo e o armazenamento, sendo ideal para o dia a dia corrido dos pais. Além disso, é um produto natural, livre de conservantes, corantes e aditivos artificiais, garantindo a segurança alimentar do seu pequeno. Escolha a Papinha Infantil Orgânica La Chef para uma alimentação saudável e prática.",
          productStock: true,
          stockQuantity: 20,
          imageUrl:
            "https://m.media-amazon.com/images/I/71V19K9CR4L._AC_SL1500_.jpg",
          menuCategoryId: foodCategory.id,
          babyId: babyShower.id,
        },
      ],
    });

    // Nova Categoria: Acessórios
    const accessoriesCategory = await tx.menuCategory.create({
      data: {
        name: "Acessórios",
        babyId: babyShower.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Chupeta Ortodôntica",
          description:
            "A Chupeta para Recém Nascido Anatômica NUK Sensitive foi desenvolvida em 100% silicone soft flex extra macio, com design moderno em peça única, alça integrada para evitar perdas e cores agradáveis. Seu formato contorna o rosto do bebê de maneira suave sem cobrir o nariz do pequeno facilitando a respiração. O bico em silicone possui formato assimétrico NUK Oral Fit com topo curvado para se adaptar melhor ao palato da criança e a base angular para o correto posicionamento da lingua. Se encaixa perfeitamente na boca proporcionando maior conforto em cada fase do crescimento do bebê. Possui um estojo protetor que pode ser utilizado no micro-ondas para higienização da chupeta e também para o transporte. A chupeta NUK Sensitive está disponível em 2 diferentes tamanhos, sendo indicados para crianças de 0 a 6 meses e 6 a 18 meses. A chupeta é livre de BPA. O modelo apresentado é recomendado para bebês de 0 a 6 meses.",

          productStock: true,
          stockQuantity: 1,
          imageUrl:
            "https://m.media-amazon.com/images/I/811o6+6sHoL._AC_SL1500_.jpg",
          menuCategoryId: accessoriesCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Cadeirinha de Alimentação",
          description:
            "Cadeira de refeição portátil com 3 posições de altura, bandeja removível e sistema de fixação para cadeiras de adulto. A Cadeira de Alimentação Portátil Pop Cosco tem a praticidade de poder ser instalada sobre as cadeiras de adulto, em sua maioria, proporcionando uma refeição mais segura e prática para a criança em família. Confortável, com acolchoado removível e lavável, para manter tudo sempre limpo, fechamento fácil e ultracompacto, com alça para carregar. Ajustável em 3 posições de altura conforme o crescimento da criança, a bandeja pode ser removida e a segurança do cinto de 3 pontos e das tiras para prender nas cadeiras de adulto, com total segurança, seja para melhor aproveitamento do espaço em casa ou a praticidade de ter sempre o espaço adequado para as refeições da criança, aonde for, em todos os momentos.",

          productStock: true,
          stockQuantity: 5,
          imageUrl:
            "https://m.media-amazon.com/images/I/51FrqC0GI9L._AC_SL1000_.jpg",
          menuCategoryId: accessoriesCategory.id,
          babyId: babyShower.id,
        },
      ],
    });

    // Nova Categoria: Mobiliário
    const furnitureCategory = await tx.menuCategory.create({
      data: {
        name: "Mobiliário",
        babyId: babyShower.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Berço Portátil",
          description:
            "Berço portátil com estrutura resistente, ideal para o bebê dormir com conforto e segurança.",

          productStock: true,
          stockQuantity: 1,
          imageUrl:
            "https://m.media-amazon.com/images/I/61ybxaWF52L._AC_SL1000_.jpg",
          menuCategoryId: furnitureCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Cômoda para Bebê",
          description:
            "Cômoda com várias gavetas para armazenar as roupas e acessórios do bebê.",

          productStock: true,
          stockQuantity: 1,
          imageUrl:
            "https://m.media-amazon.com/images/I/4167Yai1pBL._AC_SL1000_.jpg",
          menuCategoryId: furnitureCategory.id,
          babyId: babyShower.id,
        },
      ],
    });

    // ADD NEW CATEGORIES AND PRODUCTS
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
