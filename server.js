import "dotenv/config";
import express from "express";
import cors from "cors";
import Airtable from "airtable";


const app = express();
const PORT = 5000;


// Middleware

const allowedOrigins = [
  "https://royaltyladies.vercel.app",
  "http://localhost:8080",
   "http://localhost:8081"
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Airtable config
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID);

// Form submission route
app.post("/api/submitForm", async (req, res) => {
  console.log("Form data received:", req.body);


  
  try {
    const createdRecord = await base(process.env.AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          "Full Name": req.body.fullName,
          "Email": req.body.email,
          "Phone No": req.body.phone,
          "Occupation": req.body.occupation,
          "Undergraduate": req.body.isUndergraduate,
          "School": req.body.school,
          "Department": req.body.department,
          "Level": req.body.level,
          "Heard About": req.body.hearAbout,
          "Fellowship/School Name": req.body.schoolFellowshipName,
          "Skill Acquisition": req.body.interestedInSkills,
          "Skill Type": req.body.skillType,
          "Expectation": req.body.expectations
        }
      }
    ]);

    console.log("✅ Airtable insert result:", createdRecord[0].getId());
    res.status(200).json({ message: "Record added" });
  } catch (err) {
    console.error("❌ Airtable insert error:", err);
    res.status(500).json({ error: err.message });
  }
});



app.get("/test-airtable", async (req, res) => {
  try {
    console.log("API Key:", process.env.AIRTABLE_API_KEY ? "✅ Loaded" : "❌ Missing");
    console.log("Base ID:", process.env.AIRTABLE_BASE_ID);
    console.log("Table Name:", process.env.AIRTABLE_TABLE_NAME);

    const records = await base(process.env.AIRTABLE_TABLE_NAME)
      .select({ maxRecords: 1 })
      .firstPage();

    res.json({
      message: "Connected to Airtable ✅",
      sampleRecord: records[0] ? records[0].fields : null
    });
  } catch (err) {
    console.error("Airtable test error:", err);
    res.status(500).json({ error: err.message });
  }
});





app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
