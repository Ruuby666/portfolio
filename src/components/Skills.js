// src/components/Skills.js

import React from 'react';
import './Skills.css';

const skillsArray = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS',
    'Git',
    'GitHub',
    'Webpack',
    'Redux',
    'REST APIs',
    'GraphQL',
    'TypeScript',
    'Python',
    'Docker',
    'CI/CD',
    'Unit Testing',
    'Responsive Design',
    'Next.js',
    'MongoDB',
    'SQL'
];

const Skills = () => {
    return (
        <section className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
                {skillsArray.map((skill, index) => (
                    <div key={index} className="skill-oval">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
