import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  // Create a test user
  const user = await prisma.user.create({
    data: {
      email: "monika@example.com",
      password: "seedpassword",
      name: "Monika"
    }
  })

  console.log("Created user:", user.id)


  // ---------- TRIP 1 ----------
  const japanTrip = await prisma.trip.create({
    data: {
      title: "Japan Cultural Trip",
      destination: "Tokyo",
      startDate: new Date("2026-05-01"),
      endDate: new Date("2026-05-05"),
      budget: 2500,
      ownerId: user.id
    }
  })


  const day1 = await prisma.itineraryDay.create({
    data: {
      tripId: japanTrip.id,
      dayNumber: 1,
      notes: "Explore traditional Tokyo"
    }
  })

  await prisma.activity.createMany({
    data: [
      {
        itineraryDayId: day1.id,
        title: "Visit Sensoji Temple",
        location: "Asakusa",
        type: "sightseeing"
      },
      {
        itineraryDayId: day1.id,
        title: "Street Food Tour",
        location: "Nakamise Street",
        type: "food"
      },
      {
        itineraryDayId: day1.id,
        title: "Akihabara Night Walk",
        location: "Akihabara",
        type: "explore"
      }
    ]
  })


  // ---------- TRIP 2 ----------
  const italyTrip = await prisma.trip.create({
    data: {
      title: "Italy Food & History",
      destination: "Rome",
      startDate: new Date("2026-06-10"),
      endDate: new Date("2026-06-15"),
      budget: 3000,
      ownerId: user.id
    }
  })


  const italyDay1 = await prisma.itineraryDay.create({
    data: {
      tripId: italyTrip.id,
      dayNumber: 1,
      notes: "Ancient Rome exploration"
    }
  })


  await prisma.activity.createMany({
    data: [
      {
        itineraryDayId: italyDay1.id,
        title: "Colosseum Tour",
        location: "Rome",
        type: "history"
      },
      {
        itineraryDayId: italyDay1.id,
        title: "Roman Forum Walk",
        location: "Rome",
        type: "history"
      },
      {
        itineraryDayId: italyDay1.id,
        title: "Dinner in Trastevere",
        location: "Trastevere",
        type: "food"
      }
    ]
  })


  // ---------- TRIP 3 ----------
  const baliTrip = await prisma.trip.create({
    data: {
      title: "Bali Relaxation Trip",
      destination: "Bali",
      startDate: new Date("2026-07-01"),
      endDate: new Date("2026-07-06"),
      budget: 2000,
      ownerId: user.id
    }
  })


  const baliDay1 = await prisma.itineraryDay.create({
    data: {
      tripId: baliTrip.id,
      dayNumber: 1,
      notes: "Beach and sunset"
    }
  })


  await prisma.activity.createMany({
    data: [
      {
        itineraryDayId: baliDay1.id,
        title: "Seminyak Beach",
        location: "Seminyak",
        type: "beach"
      },
      {
        itineraryDayId: baliDay1.id,
        title: "Tanah Lot Temple Sunset",
        location: "Tanah Lot",
        type: "sightseeing"
      },
      {
        itineraryDayId: baliDay1.id,
        title: "Dinner at Beach Club",
        location: "Seminyak",
        type: "food"
      }
    ]
  })


  console.log("Seed data created successfully")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })