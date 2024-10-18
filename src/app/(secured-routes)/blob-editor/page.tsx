import Header from "@/components/header";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import BlobView from "@/components/pages/blob-editor/blob-view";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Share, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlobEditor = () => {
  const data = {
    id: "ofijwe39jef390",
    name: "Buster Drone",
    isNew: true,
    shareUrl: "spectramint.com/ofijwe39jef390",
    description:
      "Buster Drone is a sleek, futuristic 3D NFT representing a highly advanced, autonomous flying drone.",
    owner: "Chetan-kk32",
    ownerAccountUrl: "/sdlkfjsldkf",
    tags: ["art", "space", "drone", "robot", "animation"],
  };

  return (
    <div className="">
      <Header />
      <MaxWidthWrapper className="grid grid-cols-2 p-4 gap-4">
        <div className="relative aspect-square border border-border overflow-hidden rounded-md">
          <BlobView />
          <Badge variant="secondary" className="absolute right-3 top-3">
            Preview
          </Badge>
        </div>
        <div className=" rounded-md px-3 py-5 space-y-4">
          <div className="flex items-center justify-between ">
            <h1 className="text-3xl uppercase text-primary font-bold flex items-center gap-3">
              {data.name}
              {data.isNew && (
                <Badge variant="default" className="">
                  New
                </Badge>
              )}
            </h1>
            <Link
              href={"/"}
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <Share className="h-10 w-1h-10" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">{data.description}</p>
          <h3>
            Owned by{" "}
            <Link
              href={data.ownerAccountUrl}
              className="text-primary hover:underline underline-offset-4 font-bold"
            >
              {data.owner}
            </Link>
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, _) => (
              <Badge key={_} variant={"secondary"} className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="space-y-3 border border-border p-4 rounded-sm">
            <h5 className="text-muted-foreground font-bold">Current price:</h5>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              0.04 ETH
              <span className="text-sm font-normal text-muted-foreground">
                $104.80
              </span>
            </h1>
            <div className="">
              <Button className="font-bold flex gap-2 w-full mt-5">
                Buy now <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BlobEditor;
