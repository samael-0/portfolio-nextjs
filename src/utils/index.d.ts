import { mongoCache } from "./mongodb";

declare global {
  const mongoose: mongoCache;
}
