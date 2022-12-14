const { Router } = require("express");
const { Activity, Country, countries_activities } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  const { name, difficult, duration, season, paisid } = req.body;

  try {
    let [act, created] = await Activity.findOrCreate({
      where: {
        name: name,
        difficult: difficult,
        duration: duration,
        season: season,
      },
    });
    await act.addCountries(paisid);
    return res.json(act);
  } catch (error) {
    console.log(error);
  }
});

router.get("/get", async (req, res) => {
  try {
    let activitis = await Activity.findAll();
    return res.json(activitis);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
