import { useRouter } from "next/router";
export default function Detail() {
  const router = useRouter();
  const params: string[] | string = router.query.params || [];
  return (
    <div>
      <h4>{params ? params[0] : "Loading..."}</h4>
    </div>
  );
}
