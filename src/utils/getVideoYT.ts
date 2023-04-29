import axios from 'axios';
import extractVideoId from './extractVideoId';
import CONSTS from '@/config/constans';
import { InputVideo } from '@/types/inputVideo';

const duracionFormateada = (duracion: string) => {
  const match = duracion.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if(!match) return;
  const horas = match[1] || '00';
  const minutos = match[2] || '00';
  const segundos = match[3] || '00';
  return `${horas}:${minutos.padStart(2, '0')}:${segundos.padStart(2, '0')}`;
};

const getVideo = async (videoUrl: string) => {

  const videoId = extractVideoId(videoUrl)
  if(!videoId) throw new Error('Problema en obtener el ID del video')

  const url = `${CONSTS.YOUTUBE.URL}?id=${videoId}&key=${CONSTS.YOUTUBE.API_KEY}&part=snippet,contentDetails`;

  try {
    const response = await axios.get(url, { headers: {} });
    const videoYT = response.data.items[0];

    let thumbnail = videoYT.snippet.thumbnails?.standard?.url;
    if (!thumbnail) {
      const key = Object.keys(videoYT.snippet.thumbnails)[0];
      thumbnail = videoYT.snippet.thumbnails?.[key]?.url;
    }

    const video: InputVideo = {
      videoId: videoYT.id,
      title: videoYT.snippet.title,
      description: videoYT.snippet.description,
      thumbnailUrl: thumbnail,
      videoUrl: `https://www.youtube.com/embed/${videoId}`,
      duration: duracionFormateada(videoYT.contentDetails.duration),
    };

    return video;
  } catch (error) {
    throw new Error('Error con la API de YoutTube. (Verificar el ID del video)')
  }
};

export default getVideo;
