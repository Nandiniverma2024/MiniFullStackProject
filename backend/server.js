import express from 'express';
import cors from "cors";

app.use(cors());

const app=express();

// app.get('/', (req, res) => {
//     res.send('1st backend made by nandini without anyone help');
// });

// List of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
    {
        id: 1,
        title: "Programmer's Diet",
        content: "A programmer's diet: Coffee, coffee, and a little more coffee."
    },
    {
        id: 2,
        title: "Bug Fix",
        content: "I fixed a bug in my code. Unfortunately, I created three new features."
    },
    {
        id: 3,
        title: "JavaScript Truth",
        content: "JavaScript is weird. You think you understand it until [] + {} happens."
    },
    {
        id: 4,
        title: "Debugging",
        content: "Debugging is like being a detective in a crime movie where you are also the criminal."
    },
    {
        id: 5,
        title: "404 Love",
        content: "My love life is like a 404 error: The page you're looking for cannot be found."
    }
    ];
    res.send(jokes);
});

const port= process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listner at http://localhost:${port}`);
});
