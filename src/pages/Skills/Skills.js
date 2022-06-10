import React from 'react';

const Skills = () => {
    return (
        <div className='my-10 bg-gray-200 h-48'>
            <h3 className='text-3xl text-center mb-10'>My Skills</h3>
            <div className=''>
                <ul className="steps grid">
                    <li data-content="✓" className="step step-neutral">HTML</li>
                    <li data-content="✓" className="step step-neutral">CSS</li>
                    <li data-content="✓" className="step step-neutral">JAVASCRIPT</li>
                    <li data-content="✓" className="step step-neutral">NODE</li>
                    <li data-content="✓" className="step step-neutral">REACT</li>
                    <li data-content="✓" className="step step-neutral">Firebase Authentication</li>
                    <li data-content="✓" className="step step-neutral">MongoDB</li>
                </ul>
            </div>

        </div>
    );
};

export default Skills;