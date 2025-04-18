// Page explaining the purpose of the app
import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary to-secondary p-6 text-gray-100">
            <div className="bg-base p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
                <h1 className="text-3xl font-extrabold mb-6 text-primary">About this App</h1>
                <h2 className="text-2xl font-semibold mb-4 text-primary">Purpose</h2>
                <p className="text-muted leading-relaxed mb-4">
                    This app is designed to display the statistics gathered from the backend API.
                    <span className="text-accent italic"> Very nerdy explanation ahead...</span>
                    <br />
                    The idea came from a feeling while playing League of Legends in ranked. For me, it seemed much easier to win,
                    as an ADC, when my support was a tank with some crowd control. I felt the need to prove this theory, so I started gathering data from the API.
                    <br />
                    <span className="block bg-gray-100 p-4 rounded-lg border-l-4 border-accent my-4">
                        {`The API is built using NestJS and TypeScript, and it gathers data from the League of Legends API. It stores the data in a MongoDB database.
                        It checks if I'm playing and once the game is finished, it gathers the data from the API and stores it in the database.`}
                    </span>
                    Then upon the request of the frontend, it gathers the data from the database and sends it to the frontend.
                    <br />
                    The frontend is built using Next.js and TypeScript, and it displays the data in a user-friendly way.
                </p>
                <Link href="/">
                    <button className="mt-4 bg-secondary text-muted px-4 py-2 rounded-lg shadow hover:bg-accent hover:text-base transition duration-200">
                        Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Page;