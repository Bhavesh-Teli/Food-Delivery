import mongoose, { Model, Document } from "mongoose";

export interface IUser {
  fullname: string;
  email: string;
  password: string;
  contact: number;
  address: string;
  city: string;
  country: string;
  propfilePicture: string;
  admin?: boolean;
  lastLogin?: boolean;
  isVerified?: boolean;
  resetPasswordToken?: string;
  resetPasswordTokenExpiresAt?: Date;
  verificationToken?: string;
  verifcationTokenExpiresAt?: Date;
}

export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUserDocument>({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    default: "Update your address",
  },
  city: {
    type: String,
    default: "Update your city",
  },
  country: {
    type: String,
    default: "Update your country",
  },
  propfilePicture: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  lastLogin: {
    type: Date,
    default: Date.now(),
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken:String,
  resetPasswordTokenExpiresAt:Date,
  verificationToken:String,
  verifcationTokenExpiresAt:Date,
},{timestamps:true});

export const User : Model<IUserDocument> = mongoose.model<IUserDocument>("User",userSchema);