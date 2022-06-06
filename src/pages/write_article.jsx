import { useRouter } from "next/router";

import FormArticle from "../components/FormArticle";

export default function WriteArticle() {
   const router = useRouter();
   const query = router.query;

   return (
      <FormArticle editArticle={query.edit} />
   );
}