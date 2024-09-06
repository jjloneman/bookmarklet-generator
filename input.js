try {
  alert(`👋🏽 Hello, World!`);
} catch (error) {
  const errorMessage = `❌ Error displaying alert`;

  console.error(errorMessage, error);
  alert(`${errorMessage} (see console for details):\n\n${error}`);
}
