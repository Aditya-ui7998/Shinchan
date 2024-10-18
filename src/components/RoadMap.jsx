

const Roadmap = () => {
    const milestones = [
        { title: 'Phase 1', description: 'Initial Planning and Research' },
        { title: 'Phase 2', description: 'Design and Prototyping' },
        { title: 'Phase 3', description: 'Development' },
        { title: 'Phase 4', description: 'Testing and QA' },
        { title: 'Phase 5', description: 'Launch' },
    ];

    return (
        <div className="container mx-auto px-4 py-10 mt-[100px]" id="#roadmap">
            <h2 className="text-3xl font-bold text-center mb-6"
              style={{
                fontFamily:'Barriecito'
              }}
            >Project Roadmap</h2>
            <div className="overflow-x-auto scroll-container">
                <div className="flex space-x-6">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="flex-none w-64 p-6 bg-white shadow-lg rounded-lg border-4 border-gray-200">
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center border-4 border-black"
                                style={{
                                  fontFamily: 'Suse'
                                }}
                                >
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-center"
                             style={{
                              fontFamily:'Barriecito'
                            }}
                            >{milestone.title}</h3>
                            <p className="text-sm text-gray-600 text-center"
                             style={{
                              fontFamily: 'Suse'
                            }}
                            >{milestone.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
