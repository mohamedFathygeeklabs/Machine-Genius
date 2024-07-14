"use client";
import { createContext, useState } from "react";

const initialContextState = {
  collectedData: null as any,
  setCollectedData: (data: any) => {},
  choosedArticles: [] as any,
  setChoosedArticles: (articles: any) => {},
  previewText: "" as string,
  setPreviewText: (text: any) => {},
  selectedArticle: null as any,
  setSelectedArticle: (article: any) => {},
  selectedText: [] as any,
  setSelectedText: (text: any) => {},
  finalArticle: null as any,
  setFinalArticle: (article: any) => {},
  checkResults: [] as any,
  setCheckResults: (result: any) => {},
};

// 1- create context, export it
export const globalContext = createContext(initialContextState);

// 2- provide context, export it
export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collectedData, setCollectedData] = useState<any>(null);
  const [choosedArticles, setChoosedArticles] = useState<any>([]);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [previewText, setPreviewText] = useState<any>("");
  const [selectedText, setSelectedText] = useState<any>([]);
  const [finalArticle, setFinalArticle] = useState<any>(null);
  const [checkResults, setCheckResults] = useState<any>([]);

  // Create a context value object
  const contextValue = {
    selectedText,
    setSelectedText,
    collectedData,
    setCollectedData,
    previewText,
    setPreviewText,
    choosedArticles,
    setChoosedArticles,
    selectedArticle,
    setSelectedArticle,
    finalArticle,
    setFinalArticle,
    checkResults,
    setCheckResults,
  };

  return (
    // to provide what i created
    <globalContext.Provider value={contextValue}>
      {children}
    </globalContext.Provider>
  );
}
