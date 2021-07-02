import { keys } from '../collection';

export function pick( obj, paths: string[] ) {
  if (paths.length === 0) {
    return {};
  }

  const resolved = {};

  keys(obj).forEach(key => {
    if (paths.length === 0) {
      return;
    }

    const idx = paths.indexOf(key);

    if (idx !== -1) {
      resolved[key] = obj[key];

      paths.splice(idx, 1);
    }
  });

  return resolved;
}

export function omit( obj, paths: string[] ) {
  if (paths.length === 0) {
    return obj;
  }

  const resolved = {};

  keys(obj).forEach(key => {
    if (paths.length === 0) {
      resolved[key] = obj[key];
    } else {
      const idx = paths.indexOf(key);

      if (idx === -1) {
        resolved[key] = obj[key];
      } else {
        paths.splice(idx, 1);
      }
    }
  });

  return resolved;
}
