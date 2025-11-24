import type { Metadata } from "next";
import "./globals.css";
import { ModeProvider } from "@/components/ModeProvider";
import { EasterEggHandler } from "@/components/EasterEggHandler";
import { BodyWrapper } from "@/components/BodyWrapper";

export const metadata: Metadata = {
    title: "Defense Analyses and Research Corporation",
    description: "Rigorous, non-partisan analysis of defense and foreign policy challenges facing the United States and its allies.",
    openGraph: {
        title: "Defense Analyses and Research Corporation",
        description: "Rigorous, non-partisan analysis of defense and foreign policy challenges facing the United States and its allies.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </head>
            <body>
                <ModeProvider>
                    <EasterEggHandler />
                    <BodyWrapper>{children}</BodyWrapper>
                </ModeProvider>
            </body>
        </html>
    );
}

