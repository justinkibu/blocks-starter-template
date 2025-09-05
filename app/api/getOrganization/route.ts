import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

/**
 * Get organization information
 */
export async function GET(req: Request) {
  const { organizationId } = await req.json()
  const organization = await prisma.organization.findUniqueOrThrow({
    where: {
      id: organizationId
    },
  })

  return NextResponse.json(organization)
}