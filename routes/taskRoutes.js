import express from "express";

const router = express.Router();

router.post("/add", (req, res) => {
  res.send("Task added");
});

router.get("/:familyId", (req, res) => {
  res.send("Get tasks");
});

export default router;