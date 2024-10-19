"use client";

import Header from "@/components/header";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import MainInformationSection from "@/components/pages/nft/main-information-section";
import BlobView from "@/components/pages/nft/model-view";
import { Badge } from "@/components/ui/badge";

import { useParams } from "next/navigation";
import React from "react";
type Props = {};

const Nft = (props: Props) => {
  const { userId, nftId } = useParams();

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
        <MainInformationSection data={data} />
      </MaxWidthWrapper>
    </div>
  );
};

export default Nft;
