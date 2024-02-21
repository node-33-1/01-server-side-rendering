const express = require('express');
const router = express.Router();
const team = require('../team.json');
const projects = require('../projects.json');

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render("home");
});

router.get('/team', (req, res) => {
    // console.log(team);
    res.render("team", { team });
});

router.get('/team/:name', (req, res) => {
    const { name } = req.params;
    const user = team.find(user => user.name === name);
    res.render("team-member", { name, user });
});

router.get('/product', (req, res) => {
    res.send("Este es nuestro producto...");
});

router.get('/about-me', (req, res) => {
    res.render("about-me");
});

router.get('/projects', (req, res) => {
    res.render("projects", { projects });
});

router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = projects.find(project => project.id === +id);
    console.log(project);
    res.render("project-detail", { id, project });
})

module.exports = router;
