"use server";

import { WelcomeEmail } from "@/components/WelcomeEmail";
import { Resend } from "resend";
import { prisma } from "../lib/db";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  if (!email || !email.includes("@") || !name) {
    return { message: "Please fill in details!", status: "error" };
  }

  try {
    console.log(email, name);
    const insertemail = await prisma.waitList.upsert({
      where: { email },
      update: { name, email },
      create: { email, name },
    });
    console.log(insertemail);
    if (insertemail) {
      console.log(insertemail.name);
      const sendMail = await resend.emails.send({
        from: "Lumina <onboarding@lowurl.in>",
        to: email,
        subject: "Welcome To Lumina",
        react: WelcomeEmail({ userName: insertemail.name }) as any,
      });
      console.log(sendMail);
    }

    return {
      message: "Success! You have been added to the list",
      status: "success",
    };
  } catch (error) {
    if ((error as any).code === "P202") {
      return { message: "This email is already on the list!", status: "info" };
    }
    return { message: "Something went wrong!", status: "error" };
  }
}
