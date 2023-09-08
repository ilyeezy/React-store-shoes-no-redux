import { useMemo } from "react";

export function useformatPrice(price) {
  let parts = price.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

export function useTotalPrice(cart) {
  const totalPrice = useMemo(() => {
    return (
      cart.length &&
      cart.reduce(
        (a, b) =>
          parseFloat(b.price.split(" ").join("")) * parseInt(b.quantity) + a,
        0,
      )
    );
  }, [cart]);

  return useformatPrice(totalPrice);
}
