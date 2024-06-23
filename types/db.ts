import { Models } from "react-native-appwrite";

export type UserSchema = {
  username: string;
  email: string;
  avatar: string;
  accountId: string;
} & Models.Document;

export type VideoSchema = {
  title: string;
  thumbnail: string;
  prompt: string;
  video: string;
  creator: string;
} & Models.Document;

export type VideoWithUser = {
  title: string;
  thumbnail: string;
  prompt: string;
  video: string;
  creator: UserSchema;
} & Models.Document;
