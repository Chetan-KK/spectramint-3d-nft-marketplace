import Header from "@/components/header";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <MaxWidthWrapper className="min-h-screen pt-40">
        <div className="flex justify-center items-center gap-3">
          <Link href={"/market"} className={cn(buttonVariants())}>
            Explore NFT Marketplace
          </Link>
          <Link
            href={"/blob-editor"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Create Own 3D blob NFT
          </Link>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
