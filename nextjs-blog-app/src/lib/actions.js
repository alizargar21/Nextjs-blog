"use server";

import { createCommentApi } from "@/services/commentService";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(prevState, { parentId, postId, formData }) {
  const cookiesStore = await cookies();
  const options = await setCookieOnReq(cookiesStore);
  const rawFormData = {
    parentId,
    postId,
    text: formData.get("text"),
  };
  try {
    const { message } = await createCommentApi(rawFormData, options);

    revalidatePath("/blogs/[slug]");
       return { message };
  } catch (err) {
    const error = err?.response?.data?.message;
    return { error };
  }
}
