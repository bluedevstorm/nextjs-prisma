import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const list = await prisma.task.findMany()
    return NextResponse.json({
      items: list,
    })
  } catch (e: any) {
    return NextResponse.json(
      //   {
      //   result: "error",
      //   message: e.message,
      // }
      { error: "Internal Server Error" },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    await prisma.$connect()

    const create = await prisma.task.create({
      data: body,
    })

    console.log(create)

    return NextResponse.json({
      result: "success",
      message: create,
    })
  } catch (e: any) {
    console.log("🚀 ~ file: route.ts:91 ~ POST ~ e:", e)
    return NextResponse.json({
      result: "error",
      message: e.message,
    })
  } finally {
    await prisma.$disconnect()
  }
}

// export default async function handler(req, res) {
//   // READ ALL DATA
//   if (req.method === "GET") {
//     const tasks = await prisma.task.findMany()
//     res.json(tasks)
//   }
//   // CREATE DATA
//   else if (req.method === "POST") {
//     const { title, description } = req.body

//     const newTask = await prisma.task.create({
//       data: {
//         title,
//         description,
//       },
//     })

//     res.json(newTask)
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" })
//   }
// }
