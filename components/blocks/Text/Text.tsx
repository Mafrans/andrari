import { Component } from "../../../types/components";
import { TextProps } from "./types";
import styles from "./styles.module.css";
import { Markdown } from "../../Markdown/Markdown";

export const Text: Component<TextProps> = ({ Content }) => {
  return <Markdown className={styles.text}>{Content}</Markdown>;
};
