import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        console.log(`About Component is Created`);
        return () => {
            console.log(`About Component is Deleted`);
        }
    });

    return (
        <div className="text-center pt-10 underline underline-offset-8">
            <h1>About</h1>
        </div>
    )
}

export default About;