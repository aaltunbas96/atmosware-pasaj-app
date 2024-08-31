import { useLanguageStore } from "@/store/languageStore";
import { useQuery } from "react-query";

function useCms() {
  const { getCMSEndpoint } = useLanguageStore();
  const cmsEndpoint = getCMSEndpoint();

  const getCms = async (endpoint: string) => {
    const response = await fetch(cmsEndpoint);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data: cms } = useQuery(["cms"], () => getCms(cmsEndpoint), {
    enabled: true,
    keepPreviousData: true,
  });

  return cms;
}

export default useCms;
