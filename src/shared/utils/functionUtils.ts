import _isEmpty from "lodash/isEmpty";

import IMAGES from "@constants/Images";

export const handleImageSrc = (src: string): string => {
  return _isEmpty(src) ? IMAGES.DEFAULT_IMAGE.SRC : src;
};
