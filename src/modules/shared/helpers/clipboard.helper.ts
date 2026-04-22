/**
 * Copy text to clipboard
 * @param text - The text to copy to the clipboard.
 */
export async function copyTextToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);

    return true;
  } catch (error: unknown) {
    if (error instanceof DOMException) {
      console.error(`Error al copiar en portapapeles: ${error.message}`);
    }

    return false;
  }
}
