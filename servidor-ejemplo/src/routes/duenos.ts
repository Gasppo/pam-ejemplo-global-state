import { type PrismaClient, type Prisma } from "@prisma/client"
import { Router, type Express } from "express"

const duenosRoutes = (prisma: PrismaClient) => {
  const router = Router()

  router.get('/', async (req, res) => {
    const duenos = await prisma.dueno.findMany()
    res.json(duenos)
  })

  router.get('/:id', async (req, res) => {
    const { id } = req.params
    const dueno = await prisma.dueno.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        mascota: true
      }
    })
    res.json(dueno)
  })

  router.get('/conMascotas', async (req, res) => {
    const dueno = await prisma.dueno.findMany({
      where: {
        mascota: {
          some: {}
      }
    },
    include: {
      mascota: true
    }
    })
    res.json(dueno)
  })
  router.post('/', async (req, res) => {
    const { nombre, apellido} = req.body
    const dueno = await prisma.dueno.create({
      data: {
        nombre,
      apellido,
      }
    })
    res.json(dueno)
  })

  return router
}

export default duenosRoutes