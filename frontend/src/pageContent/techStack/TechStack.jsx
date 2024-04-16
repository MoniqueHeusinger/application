import Stack from "react-bootstrap/esm/Stack";
import Container from "react-bootstrap/esm/Container";
import "./TechStack.css";

const TechStack = () => {
    const stackList = ["HTML", "CSS", "Java Script", "SCSS", "React", "Node.js", "Express", "MongoDB", "Mongoose", "REST-API", "Git", "Github", "Tailwind", "Figma"]

    return (
        <Stack className="relative my-11">
            <h2>Tech Stack</h2>
            <Container className="container text-center tech-stack-container mt-3">
                <div className="row row-cols-auto flex-wrap gap-3 justify-content-between">
                    {stackList.map((item, index) => (
                        <span key={index} className="px-5 py-3 rounded-4  col">{item}</span>
                    ))}

                </div>
            </Container>
        </Stack>
    );
}

export default TechStack;