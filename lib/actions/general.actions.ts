import { db } from "@/firebase/admin";

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  const interviews = await db
    .collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();

  if (interviews.empty) {
    return null;
  }

  return interviews.docs.map((interview) => ({
    id: interview.id,
    ...interview.data(),
  })) as Interview[];
}

export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const userId = params;
  const limit = 20;

  const interviews = await db
    .collection("interviews")
    .where("userId", "!=", userId)
    .where("finalized", "==", true)
    .orderBy("createdAt", "desc")
    .limit(limit)
    .get();

  if (interviews.empty) {
    return null;
  }

  return interviews.docs.map((interview) => ({
    id: interview.id,
    ...interview.data(),
  })) as Interview[];
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  const interview = await db.collection("interviews").doc(id).get();

  if (!interview.exists) {
    return null;
  }

  return interview.data() as Interview | null;
}
