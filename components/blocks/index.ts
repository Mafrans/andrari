import { Component } from "../../types/components";
import { Text } from "./Text/Text";

const components = {
  "blocks.text": Text,
};

export const Block: Component<Strapi.Component<{}>> = ({
  __component,
  ...props
}) => components[__component as keyof typeof components](props as any);
