(() => {
  const fullName = (firstName: string, ...restNames: string[]): string => {
    return `${firstName} ${restNames.join(" ")}`;
  };

  const superman = fullName("Clark", "Joseph", "Kent");

  console.log({ superman });
})();
