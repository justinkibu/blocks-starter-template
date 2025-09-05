import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

/**
 * Get all users in an organization
 */
export async function GET(req: Request) {
  const { organizationId } = await req.json()
  const users = await prisma.user.findMany({
    where: {
      organization: organizationId
    },
  })

  return NextResponse.json(users)
}