import { createClient, MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};
type Eyecatch = {
  url: string;
  height: number;
  width: number;
};
export type Post = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  eyecatch?: Eyecatch;
  category: Category;
  content: string;
  description: string;
};
export type PostResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Post[];
};

/**
 * 記事を複数件取得する
 * @param queries クエリ
 * @returns クエリに一致した記事情報一覧
 */
export const getPosts = async (queries?: MicroCMSQueries) => {
  return await client.get<PostResponse>({ endpoint: "blogs", queries });
};

/**
 *
 * @param contentId 記事1けんの詳細を取得する
 * @param queries クエリ
 * @returns クエリに一致した記事
 */
export const getPostDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Post>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};
