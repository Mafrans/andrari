import { Component } from "../../../types/components";
import styles from "./styles.module.css";
import { Markdown } from "../../Markdown/Markdown";

export const Text: Component<Blocks.Text> = ({ Content }) => {
  return <Markdown className={styles.text}>{Content}</Markdown>;
};
