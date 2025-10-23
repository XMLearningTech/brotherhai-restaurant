"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant={copied ? "default" : "outline"}
      size="sm"
      className="min-w-[100px]"
    >
      {copied ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="mr-2 h-4 w-4" />
          Copy Code
        </>
      )}
    </Button>
  );
}
