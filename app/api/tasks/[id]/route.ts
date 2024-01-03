import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

type Props = {
  params: { id: string }
}

const prisma = new PrismaClient()
export async function GET(request: NextRequest, props: Props) {
  try {
    const id = props.params.id

    await prisma.$connect()

    const item = await prisma.task.findFirst({
      where: { id },
    })

    return NextResponse.json(item, { status: 200 })
  } catch (e: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function PUT(request: NextRequest, props: Props) {
  try {
    const id = props.params.id
    const body = await request.json()

    await prisma.$connect()

    const update = await prisma.task.update({
      where: { id },
      data: body,
    })

    return NextResponse.json(
      { message: "Data updated successfully" },
      { status: 200 }
    )
  } catch (e: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function DELETE(request: NextRequest, props: Props) {
  try {
    const id = props.params.id

    await prisma.$connect()

    const dispose = await prisma.task.delete({
      where: { id },
    })

    return NextResponse.json(
      { message: "Data deleted successfully" },
      { status: 200 }
    )
  } catch (e: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
