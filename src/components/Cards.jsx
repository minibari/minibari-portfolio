import Card from "./Card";
import { projectsData } from "../projectsData";

export default function Cards() {


    return (
        <div className="container mt-5">
            <div className="row">
                {projectsData.map((project) =>

                    <div className="col-md-4">
                        <Card key={project.title} {...project} />
                    </div>
                )}
                {/* tři tečky v JS vemou všechny vlastnosti objektu a dosadí je do komponenty jako jednotlivé props */}
            </div>
        </div>
    );
}