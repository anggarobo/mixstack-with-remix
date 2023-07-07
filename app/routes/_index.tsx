import type { V2_MetaFunction } from "@remix-run/node";
import { DialogDemo } from "~/components/modules/addBalance";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Mixstack with Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    // <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    //   <h1>Balance</h1>
    // </div>
    <main className="container max-w-[1600px] m-auto flex min-h-screen flex-col items-center justify-start gap-12 py-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">BALANCE</h1>
      <DialogDemo />
    </main>
  );
}
