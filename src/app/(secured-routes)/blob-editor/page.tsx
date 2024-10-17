import Header from "@/components/header";
import BlobView from "@/components/pages/blob-editor/blob-view";
import React from "react";

const BlobEditor = () => {
  return (
    <div className="h-screen">
      <Header />
      <BlobView />
    </div>
  );
};

export default BlobEditor;
