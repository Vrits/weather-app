export const loadImage = async (path: string) => await import(`./Weather/${path}.jpg`);
export const loadIcons = async (path: string) => await import(`./Icons/${path}@2x.png`);