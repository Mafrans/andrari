import ReactMarkdown from "react-markdown";
import { Component } from "../../../types/components";
import { TextProps } from "./types";

export const Text: Component<TextProps> = ({ Content }) => {
  return <ReactMarkdown>{Content}</ReactMarkdown>;
};
