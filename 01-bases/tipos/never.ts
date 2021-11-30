(() => {
  // never es que  la funcion no debe terminar exitosamente
  const error = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  };

  error("new error");
})();
