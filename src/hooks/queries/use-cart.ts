import { useQuery } from "@tanstack/react-query";

import { getCart } from "@/actions/get-cart";

export const getUseCartQueryKey = () => ["cart"] as const;

// ✅ Hook corrigido
export const useCart = () => {
  return useQuery({
    queryKey: getUseCartQueryKey(), // aqui estava o erro: estava usando a função sem chamar
    queryFn: () => getCart(),
  });
};
