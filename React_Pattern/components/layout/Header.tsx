import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const moveToProvider = () => {
    router.push("./ProviderPattern");
  };
  const moveToContainerAndPresentation = () => {
    router.push('./ContainerAndPresentation')
  }
  return (
    <div className="header">
      <button onClick={moveToProvider} className="Header-item">
        Provider
      </button>
      <button onClick={moveToContainerAndPresentation} className="Header-item">
        Container/Presentation
      </button>
    </div>
  );
}
