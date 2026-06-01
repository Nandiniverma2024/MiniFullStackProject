import express from 'express';


const app=express();

// app.get('/', (req, res) => {
//     res.send('1st backend made by nandini without anyone help');
// });

// List of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
    {
        id: 1,
        title: "Code Review",
        content: "Code reviews are where optimism meets reality."
    },
    {
        id: 2,
        title: "Technical Debt",
        content: "Technical debt is like a credit card: convenient today, expensive tomorrow."
    },
    {
        id: 3,
        title: "Production Bug",
        content: "The most dangerous bugs are the ones that pass all tests and still reach production."
    },
    {
        id: 4,
        title: "System Design",
        content: "Every system looks scalable until real users arrive."
    },
    {
        id: 5,
        title: "Clean Code",
        content: "Clean code is code that your future self can read without questioning past life choices."
    }
    ];
    res.send(jokes);
});

const port= process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listner at http://localhost:${port}`);
});