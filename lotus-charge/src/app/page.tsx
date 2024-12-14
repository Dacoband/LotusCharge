import MaxWithWrapper from "@/components/MaxWithWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-500">
      <section>
        <MaxWithWrapper className="pd-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52"></MaxWithWrapper>
      </section>
    </div>
  );
}
