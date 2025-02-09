declare module 'tailwindcss/lib/util/flattenColorPalette' {
  const flattenColorPalette: (colors: object) => Record<string, string>;
  export default flattenColorPalette;
} 