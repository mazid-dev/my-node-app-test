const express = require("express");
const path = require("path"); // 'path' মডিউল ফাইল পাথ ম্যানেজ করতে সাহায্য করে
const app = express();

// 'public' ফোল্ডারের ফাইলগুলো স্ট্যাটিক ফাইল হিসেবে সার্ভ করার জন্য
app.use(express.static(path.join(__dirname, 'public')));

// রুট URL-এ (/) এলে index.html ফাইলটি পাঠাবে
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});