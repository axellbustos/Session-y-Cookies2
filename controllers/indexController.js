const {validationResult}=require('express-validator')
module.exports = {
  index: (req, res) => {
    res.render("index", { title: "Express" });
  },
  register: (req, res) => {
    const errors = validationResult(req);
    const { name, color, email, age, remember } = req.body;

    if (errors.isEmpty()) {

        req.session.user = {
        name,
        color,
        email,
        age,
        remember,
      };
      
      res.cookie("color", req.session.user.color, {
        maxAge: 150 * 60,
      });
      if (remember) {
        res.cookie("remember", req.session.user, {
          maxAge: 1000 * 60,
        });
      }
      //return res.send(req.session.user)
      return res.redirect("/users/mostrarDatos");
    } else {
      const errors = validationResult(req);
      return res.render("index", {
        errors: errors.mapped(),
        old: req.body
      });
    }
  },
//olvidar
  destroy: (req, res) => {
    req.session.destroy(),
      res.cookie("color", null, {
        maxAge: -1,
      });
    res.redirect("/");
  },

  salida: (req, res) => {
    
    res.render("salida");
  },
};
