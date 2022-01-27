const { Router } = require("express");

module.exports = function ({ UsuarioController, AuthController, authMiddleware }) {
  const router = Router();

  router.get("/", authMiddleware, UsuarioController.getUsuarios.bind(UsuarioController));
  router.get("/:id", authMiddleware, UsuarioController.getUsuario.bind(UsuarioController));
  router.post("/crear", AuthController.createUsuario.bind(AuthController));
  router.put("/:id", authMiddleware, UsuarioController.updateUsuario.bind(UsuarioController));
  router.delete("/:id", authMiddleware, UsuarioController.deleteUsuario.bind(UsuarioController));
  router.post("/login", AuthController.login.bind(AuthController));

  return router;
};