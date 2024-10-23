import { type PrismaClient, type Prisma } from "@prisma/client"
import { Router, type Express } from "express"

const mascotasRoutes = (prisma: PrismaClient) => {
  const router = Router()

  router.get('/', async (req, res) => {
    const mascotas = await prisma.mascota.findMany()
    res.json(mascotas)
  })
  router.get('/:duenoId', async (req, res) => {
    const { duenoId } = req.params
    const dueno = await prisma.mascota.findMany({
      where: {
        duenoId: parseInt(duenoId)
      }
    })
    res.json(dueno)
  })
  router.post('/', async (req, res) => {
    const { nombre, raza, duenoId } = req.body as { nombre: string, raza: string, duenoId: string }
    const mascota = await prisma.mascota.create({
      data: {
        nombre: nombre,
        raza: raza,
        duenoId: parseInt(duenoId)
      }
    })
    res.json(mascota)
  })
  return router
}

export default mascotasRoutes