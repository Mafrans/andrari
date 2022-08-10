import { FC, PropsWithChildren } from "react";

export type Component<T> = FC<PropsWithChildren<T> & { className?: string }>;
