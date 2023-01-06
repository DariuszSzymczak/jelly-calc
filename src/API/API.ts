import { db } from "@/App";
import { collection, getDocs, addDoc } from "firebase/firestore";

export type Calculation = {
  date: string;
  value: string;
};

export class Api {
  getCalculations: () => Promise<Calculation[]> = async () => {
    let data: Calculation[] = [];
    const reference = collection(db, "calculations");
    const docsSnap = await getDocs(reference);
    docsSnap.forEach((doc) => {
      data.push(doc.data() as Calculation);
    });
    return data;
  };

  sendCalculation = async (data: Calculation) => {
    const reference = collection(db, "calculations");
    const docRef = await addDoc(reference, data);
    return docRef.id;
  };
}

export default new Api();
