(() => {
  function callBatman(): void {
    return; // interpreta como return undefined
    // return 1;
  }

  const callSuperman = (): void => {
    // return null;
    return;
  };

  const a = callBatman(); // a es undefined, pero regresa void
  console.log(a);
})();
