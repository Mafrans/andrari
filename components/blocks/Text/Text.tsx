import ReactMarkdown from "react-markdown";
import { Component } from "../../../types/components";
import { TextProps } from "./types";
import styles from "./styles.module.css";

export const Text: Component<TextProps> = ({ Content }) => {
  return <ReactMarkdown className={styles.text}>{Content}</ReactMarkdown>;
};
