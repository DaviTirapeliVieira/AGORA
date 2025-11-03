export const buildNavigationPaths = (config, parentPath = '') => {
  return config.flatMap(item => {
    const fullPath = `${parentPath}${item.path}`;
    if (item.children) {
      return [
        { ...item, path: fullPath, children: item.children },
        ...buildNavigationPaths(item.children, fullPath),
      ];
    }
    return { ...item, path: fullPath };
  });
};
