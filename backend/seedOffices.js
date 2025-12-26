const mongoose = require("mongoose");
const connectDB = require("./src/config/db");
const Office = require("./src/models/offices/OfficesSchema");

const offices = [
  { officeId: 1, officeName: "Municipal Mayor's Office (MMO)", officeCode: "MMO", services: [] },
  { officeId: 2, officeName: "Municipal Social Welfare and Development Office (MSWDO)", officeCode: "MSWDO", services: [] },
  { officeId: 3, officeName: "Municipal Civil Registry Office (MCRO)", officeCode: "MCRO", services: [] },
  { officeId: 4, officeName: "Municipal Assessor's Office (MAO)", officeCode: "MAO", services: [] },
  { officeId: 5, officeName: "Municipal Accounting Office (MACCO)", officeCode: "MACCO", services: [] },
  { officeId: 6, officeName: "Municipal Treasury Office (MTO)", officeCode: "MTO", services: [] },
  { officeId: 7, officeName: "Municipal Engineering Office (MEO)", officeCode: "MEO", services: [] },
  { officeId: 8, officeName: "Business Permit and Licensing Section (BPLS)", officeCode: "BPLS", services: [] },
  { officeId: 9, officeName: "Human Resource Management Office (HRMO)", officeCode: "HRMO", services: [] },
  { officeId: 10, officeName: "Municipal Budget Office (MBO)", officeCode: "MBO", services: [] },
  { officeId: 11, officeName: "Municipal Planning and Development Office (MPDO)", officeCode: "MPDO", services: [] },
  { officeId: 12, officeName: "Municipal Agriculture Office (MAGRO)", officeCode: "MAGRO", services: [] },
  { officeId: 13, officeName: "Municipal Health Office (MHO)", officeCode: "MHO", services: [] },
  { officeId: 14, officeName: "Municipal General Service Office (MGSO)", officeCode: "MGSO", services: [] },
  { officeId: 15, officeName: "Municipal Disaster Risk Reduction Management Office (MDRRMO)", officeCode: "MDRRMO", services: [] },
  { officeId: 16, officeName: "SEEDO-Market", officeCode: "SEEDO-MARKET", services: [] },
  { officeId: 17, officeName: "SEEDO-Slaughter", officeCode: "SEEDO-SLAUGHTER", services: [] },
  { officeId: 18, officeName: "Office of the Senior Citizen's Affairs (OSCA)", officeCode: "OSCA", services: [] },
  { officeId: 19, officeName: "MMO-Tourism Section", officeCode: "MMO-TOURISM", services: [] },
  { officeId: 20, officeName: "MMO-Information and Technology Section", officeCode: "MMO-IT", services: [] },
];

async function seedOffices() {
  try {
    await connectDB();
    for (const office of offices) {
      const exists = await Office.findOne({ officeId: office.officeId });
      if (!exists) {
        await Office.create(office);
        console.log(`Inserted: ${office.officeName}`);
      } else {
        console.log(`Skipped (already exists): ${office.officeName}`);
      }
    }
    console.log("Seeding complete!");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding offices:", err);
  }
}

seedOffices();
