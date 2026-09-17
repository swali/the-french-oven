import config from 'the-french-oven/config/environment';

export default function assetUrl(path) {
  return `${config.rootURL}${path.replace(/^\//, '')}`;
}
