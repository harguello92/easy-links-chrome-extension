export const checkUrlStatus = async (url: string) => {
  try {
    await fetch(url, {
      method: 'HEAD',
      mode: 'no-cors',
    });

    return true;
  } catch (error) {
    return false;
  }
};
