import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const moveToProvider = () => {
    router.push("./ProviderPattern");
  };
  const moveToContainerAndPresentation = () => {
    router.push('./ContainerAndPresentation')
  }
  const moveToHocPattern = () => {
    router.push('./Hoc')
  }
  const moveToCommandPattern = () => {
    router.push('./Command')
  }
  return (
    <div className="header">
      <button onClick={moveToProvider} className="Header-item">
        Provider
      </button>
      <button onClick={moveToContainerAndPresentation} className="Header-item">
        Container/Presentation
      </button>
      <button onClick={moveToHocPattern} className="Header-item">
        HOC Pattern
      </button>
      <button onClick={moveToCommandPattern} className="Header-item">
        Command Pattern
      </button>
    </div>
  );
}
