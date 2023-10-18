interface IImage {
  ALT: string;
  SRC: string;
}

const IMAGES = {
  DEFAULT_IMAGE: {
    ALT: "Default image ilustration, with two black mountains, two gray clouds and a green sun",
    SRC: new URL("../assets/images/default-image.svg", import.meta.url).href,
  } as IImage,
  ERROR_IMAGE: {
    ALT: "Illustration of a girl dressed in a green t-shirt and black pants, in a crouched position, with a tool in her hand. In the background is a screen, with an insect on the left and on the right some text simulations.",
    SRC: new URL("../assets/images/error.svg", import.meta.url).href,
  } as IImage,
  LIVEN_LOGO: {
    ALT: "Liven.tech Logo",
    SRC: new URL("../assets/images/liven-logo.png", import.meta.url).href,
  } as IImage,
};

export default IMAGES;
