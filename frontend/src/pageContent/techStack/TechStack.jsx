import Stack from "react-bootstrap/esm/Stack";
import Container from "react-bootstrap/esm/Container";
import "./TechStack.css";

const TechStack = () => {
    const stackList = ["HTML", "CSS", "Java Script", "SCSS", "React", "Node.js", "Express", "MongoDB", "Mongoose", "REST-API", "Git", "Github", "Tailwind", "Figma"]

    return (
        <Stack className="relative my-11">
            <h2>Tech Stack</h2>
            <Container className="container text-center tech-stack-container mt-3 ticker-wrap mx-auto overflow-hidden ">
                <div className="row row-cols-auto flex-wrap gap-3 justify-content-between ticker d-inline-block">
                    <span className="item-collection-1">
                        {stackList.map((item, index) => (
                            <span key={index} className="px-5 py-3 rounded-4  col item d-inline-block mx-3">{item}</span>
                        ))}
                    </span>
                    <span className="item-collection-2">
                        {stackList.map((item, index) => (
                            <span key={index} className="px-5 py-3 rounded-4  col item d-inline-block mx-3">{item}</span>
                        ))}
                    </span>

                </div>
            </Container>
        </Stack>
    );
}

export default TechStack;