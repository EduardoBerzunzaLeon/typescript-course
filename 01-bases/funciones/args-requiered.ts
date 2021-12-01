(() => {
  const fullName = (
    firstName: string,
    lastName: string | undefined
  ): string => {
    return `${firstName} ${lastName}`;
  };

  const name: string = fullName("Tony", "Stark");

  console.log(name);
})();
