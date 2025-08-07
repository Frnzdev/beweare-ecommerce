import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DecreaseCartProductQuantity } from "@/actions/decrease-cart-product-quantity";

import { getUseCartQueryKey } from "../queries/use-cart";

export const getDrecreaseCartProductMutationKey = (cartItemId: string) =>
  ["decrease-cart-product-quantity"] as const;

export const useDecreaseCartProduct = (cartItemId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: getDrecreaseCartProductMutationKey(cartItemId),
    mutationFn: () => DecreaseCartProductQuantity({ cartItemId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUseCartQueryKey() });
    },
  });
};
