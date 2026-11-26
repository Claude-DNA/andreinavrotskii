import Home from "./Home";
import { isRussianSite } from "./site-language";

export default async function Page() {
  return <Home russian={await isRussianSite()} />;
}
