import { collection,  setDoc, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore"
import { db } from '../config/firebase'
import { InputVideo } from "@/types/inputVideo";
import CONSTS from "@/config/constans";

const colRef = collection(db, CONSTS.NAME_COLLECTION)

const registerVideo = async (video: InputVideo) => {
  const docRef = doc(db, CONSTS.NAME_COLLECTION, video.videoId);
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()) throw new Error('ID se encuentra registrado: '+ video.videoId)

  await setDoc(doc(colRef, video.videoId), video);
  return getDoc(docRef);
};

const todosVideos = async () => {
  const querySnapshot = await getDocs(colRef);
  return querySnapshot.docs;
}

export {
  registerVideo,
  todosVideos,
};

