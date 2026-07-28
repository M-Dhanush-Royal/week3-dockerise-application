const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>🚀 Week 3 - Dockerise Application</h1>
        <h2>SkillAudit Cloud Internship</h2>
        <p>Hello from Docker!</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});