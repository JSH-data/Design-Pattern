import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const moveToProvider = () => {
    router.push("./ProviderPattern");
  };
  return (
    <div className="header">
      <button onClick={moveToProvider} className="Header-item">
        Provider
      </button>
    </div>
  );
}
