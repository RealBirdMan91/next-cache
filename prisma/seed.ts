import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // Lösche alle Einträge in den Tabellen
  await prisma.post.deleteMany();
  await prisma.invoice.deleteMany();

  console.log("Alle Daten gelöscht");

  // Erstelle 100 neue Posts
  for (let i = 0; i < 100; i++) {
    await prisma.post.create({
      data: {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
      },
    });
  }

  // Erstelle 100 neue Invoices
  for (let i = 0; i < 100; i++) {
    await prisma.invoice.create({
      data: {
        total: parseFloat(faker.finance.amount()),
        currency: faker.finance.currencyCode(),
      },
    });
  }

  console.log("Seed completed");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
