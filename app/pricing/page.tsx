import Pricing from "../../components/ui/Pricing/Pricing";


export default async function PricingPage() {
    const user = {} as any;
    const products = [] as any;
    const subscription = {} as any;

  return (
    <Pricing
      user={user}
      products={products ?? []}
      subscription={subscription}
    />
  );
}