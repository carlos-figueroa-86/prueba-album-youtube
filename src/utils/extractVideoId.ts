const extractVideoId = (url: string) => {
  const regex = /(?:youtube\.com\/.*[?&]v=|youtu\.be\/)([^#&?]+)/;
  const match = url.match(regex);
  if (match && match[1] && match[1].length === 11) return match[1];
  return null;
};

export default extractVideoId;