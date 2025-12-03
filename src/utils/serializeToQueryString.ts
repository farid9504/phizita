export const serializeQuery = (
  data: Record<string, string | number | boolean>
): string => {
  const entries = Object.entries(data);
  const params = [];
  
  for (let i = 0; i < entries.length; i++) {
    const [key, val] = entries[i];
    if (val !== undefined && val !== null) {
      params.push(
        encodeURIComponent(key) + '=' + encodeURIComponent(String(val))
      );
    }
  }
  
  return params.join('&');
};
