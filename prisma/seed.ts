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
        name: "Fralda Descartável",
        babyId: babyShower.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "🌟 Fraldinha G",
          description:
            "💧 Toalhas Umedecidas do Miguel 💧 Essas toalhinhas são perfeitas para manter o Miguel limpinho e confortável a qualquer hora do dia! 👶💙 Com uma fórmula suave e delicada, as toalhas umedecidas ajudam a manter a pele do Miguel fresquinha e protegida. Seja para a troca de fralda ou para um banho rápido, essas toalhinhas são sempre uma boa escolha para momentos de cuidado e carinho. 🔔 Importante: A imagem que aparece aqui é apenas uma sugestão de estilo. O item real pode variar, mas o carinho e a suavidade são garantidos!",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/71yiMzUo+kL._AC_SL1500_.jpg",
          menuCategoryId: babyCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "🌟Fraldinha M",
          description:
            "🌟 Fraldinha M do Miguel 🌟 Miguel está crescendo rapidinho, e essa fraldinha M foi escolhida com muito carinho para acompanhar cada momentinho especial! 👶💙 Uma fraldinha macia, confortável e perfeita para garantir o maior conforto para o nosso pacotinho de amor. Vai ser uma alegria ver o Miguel usando! 🔔 Importante: A imagem que aparece aqui é apenas uma sugestão de estilo. O item real pode variar, mas o carinho e o conforto são garantidos!",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/81S9NFdexVL._AC_SL1500_.jpg",
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
          name: "💧Toalhas Umedecidas do Miguel💧",
          description:
            "💧 Toalhas Umedecidas do Miguel 💧 Essas toalhinhas são perfeitas para manter o Miguel limpinho e confortável a qualquer hora do dia! 👶💙Com uma fórmula suave e delicada, as toalhas umedecidas ajudam a manter a pele do Miguel fresquinha e protegida. Seja para a troca de fralda ou para um banho rápido, essas toalhinhas são sempre uma boa escolha para momentos de cuidado e carinho.🔔 Importante: A imagem que aparece aqui é apenas uma sugestão de estilo. O item real pode variar, mas o carinho e a suavidade são garantidos!'",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/61TH-AyESKL._AC_SL1200_.jpg",
          menuCategoryId: hygieneCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Creme para Assaduras do Miguel 👶💙",
          description:
            "O Miguel merece todo o cuidado e conforto, e esse creme para assaduras vai garantir que ele fique sempre protegido e sem desconforto. 👶💙 Formulado especialmente para a pele sensível do Miguel, esse creme é ideal para prevenir e tratar as assaduras, mantendo a pele do bebê hidratada e saudável. Cada aplicação é uma dose de carinho e cuidado!  🔔 Importante: A imagem que aparece aqui é apenas uma sugestão de estilo. O item real pode variar, mas o carinho e a proteção são garantidos!",
          productStock: true,
          stockQuantity: 10,
          imageUrl:
            "https://m.media-amazon.com/images/I/615lj9h9vXL._AC_SL1500_.jpg",
          menuCategoryId: hygieneCategory.id,
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
