import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database: cleaning existing data...')

  // Remove children first because of foreign key constraint
  await prisma.mascota.deleteMany({})
  await prisma.dueno.deleteMany({})

  console.log('Creating sample Dueno and Mascota records...')

  const dueno1 = await prisma.dueno.create({
    data: {
      nombre: 'Carlos',
      apellido: 'Gomez',
      mascota: {
        create: [
          { nombre: 'Rex', raza: 'Labrador' },
          { nombre: 'Luna', raza: 'Bulldog' },
        ],
      },
    },
    include: { mascota: true },
  })

  const dueno2 = await prisma.dueno.create({
    data: {
      nombre: 'María',
      apellido: 'Perez',
      mascota: {
        create: [{ nombre: 'Milo', raza: 'Beagle' }],
      },
    },
    include: { mascota: true },
  })

  console.log('Seeding finished. Created records:')
  console.log({ dueno1, dueno2 })
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
