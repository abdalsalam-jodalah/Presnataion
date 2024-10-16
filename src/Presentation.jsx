import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Lightbulb, Gift, School, Code, User, Target, Mail } from 'lucide-react';

// Comprehensive club data
const clubsData = {
    AAUP: {
        'IEEE AAUP': {
            leader: { name: 'Ibraheem Atatrah', email: 'ibraheem@example.com', role: 'Leader' },
            members: []
        },
        'Cyber Security Club AAUP': {
            leader: { name: 'Salam Qarish', email: 's.qaresh@student.aaup.edu', role: 'Leader' },
            members: [
                { name: 'Qusy Bzour', email: 'q.bzour@student.aaup.edu', role: 'Co-Founder' },
                { name: 'Arab Hammad', email: 'a.hammad10@student.aaup.edu', role: 'Co-Founder' },
                { name: 'Leen Abu Baker', email: 'l.abubaker3@student.aaup.edu', role: 'Co-Founder' },
                { name: 'Ahamd Barri', email: 'a.barri@student.aaup.edu', role: 'Co-Founder' }
            ]
        },
        'Information Technology Club AAUP': {
            leader: { name: 'Mohammad Teiti', email: 'm.taiti@student.aaup.edu', role: 'Club President' },
            members: [
                { name: 'Hamza Zyoud', email: 'h.zyoud6@student.aaup.edu', role: 'Vice President' },
                { name: 'Khaled Saayda', email: 'k.saayda@student.aaup.edu', role: 'Project Manager' },
                { name: 'Nawras Farhat', email: 'n.farhat1@student.aaup.edu', role: 'Administrative Lead' },
                { name: 'Safaa Sawafta', email: 's.sawafta14@student.aaup.edu', role: 'Social Media Manager' },
                { name: 'Farah Talalweh', email: 'f.talalweh@student.aaup.com', role: 'Social Media Manager' },
                { name: 'Dania AbuFarha', email: 'd.abufarha1@student.aaup.edu', role: 'Event Coordinator' },
                { name: 'Ghada Alsa\'ed', email: 'g.alsaed@student.aaup.edu', role: 'Event Coordinator' }
            ]
        }
    },
    BU: {
        'IEEE BU': {
            leader: { name: 'Nadine Abuodeh', email: 'nadinebuodeh4@gmail.com', role: 'Chairwoman' },
            members: [
                { name: 'Rami Darras', email: 'Ramidarras09@gmail.com', role: 'Vice Chair' },
                { name: 'Ehab Maali', email: 'ehab1.maali@gmail.com', role: 'CS Chair' },
                { name: 'Momen Almohtaseb', email: 'momen.almo7taseb@gmail.com', role: 'CS Vice Chair' },
                { name: 'Hasan Zawahra', email: '202109948@bethlehem.edu', role: 'CS Vice Chair' },
                { name: 'Salma Abu Odeh', email: 'salmamahmoudao@gmail.com', role: 'Educational Activities Team' },
                { name: 'Sarah Sulibe', email: '202109705@bethlehem.edu', role: 'Educational Activities Team' }
            ]
        }
    },
    NNU: {
        'IEEE NNU': {
            leader: { name: 'Ahmad Nazal', email: 'nazzala8@gmail.com', role: 'Head of CS' },
            members: []
        },
        'HashCap NNU': {
            leader: { name: 'Ammar Ishtayeh', email: 'ammar.shtayeh@gmail.com', role: 'Leader' },
            members: []
        },
        'EWB NNU': {
            leader: { name: 'Unknown', email: 'unknown@example.com', role: 'Leader' },
            members: []
        }
    },
    PPU: {
        'IEEE PPU': {
            leader: { name: 'Mohammad Atrash', email: 'matrash@ieee.org', role: 'Chairman' },
            members: [
                { name: 'Roaa Asafra', email: 'roaazakariyya1@gmail.com', role: 'Secretary' },
                { name: 'Mahmoud Qawasma', email: 'mahmoud.qaw@ieee.org', role: 'Vice Chair' },
                { name: 'Abdalsalam Alsharif', email: 'abdalsalam@ieee.org', role: 'Public Relations' },
                { name: 'Adel Naser Eddin', email: 'adelnaser678@ieee.org', role: 'Treasurer' },
                { name: 'Lana Melhem', email: 'LanaMelhem4@ieee.org', role: 'Media Leader' }
            ]
        },
        'Code Academy PPU': {
            leader: { name: 'Momen Arafah', email: 'cp.momen@gmail.com', role: 'Leader' },
            members: [
                { name: 'Saed Misk', email: 'saad.h.misk@gmail.com', role: 'Member' },
                { name: 'Majd Tamimi', email: 'tamimiimajd@gmail.com', role: 'Member' },
                { name: 'Tarteil Natsheh', email: 'tarteel.ghassan1@gmail.com', role: 'Member' },
                { name: 'Aishah Madhoon', email: 'ayshamadhoun1@gmail.com', role: 'Member' },
                { name: 'Sarah Abu Ermileh', email: '211027@ppu.edu.ps', role: 'Member' },
                { name: 'Nour Alhuda Natsheh', email: 'nouralhuda.natsheh@gmail.com', role: 'Member' },
                { name: 'Sari Sultan', email: 'sary.sultan2004@gmail.com', role: 'Member' },
                { name: 'Anas Zhour', email: 'anaskzhour@gmail.com', role: 'Member' },
                { name: 'Lujain Abu Rajab', email: 'lujainaburajab@gmail.com', role: 'Member' },
                { name: 'Shadi Almohtaseb', email: 'shadi876543211@gmail.com', role: 'Member' },
                { name: 'Rand Haymnouni', email: 'randhaymouni@gmail.com', role: 'Member' }
            ]
        }
    },
    HU: {
        'Computer Science Club HU': {
            leader: { name: 'Mohammad Al-Tamimi', email: 'mohammaedtamimei@gmail.com', role: 'President' },
            members: []
        }
    },
    BZU: {
        'GDG on Campus BZU': {
            leader: { name: 'Rasheed Qubaj', email: 'rasheedsrq@gmail.com', role: 'Organizer' },
            members: [
                { name: 'Farah Badaha', email: 'badahafarah@gmail.com', role: 'Vice Organizer' },
                { name: 'Faris Abufarha', email: 'farisabufarha33@gmail.com', role: 'Mentor' },
                { name: 'Sara Khader', email: 'sarakhader560@gmail.com', role: 'Consultant' },
                { name: 'Lana Sayes', email: 'lanasayes84@gmail.com', role: 'Head of Market Team' },
                { name: 'Lara Diffallah', email: 'lara.daifallah.23@gmail.com', role: 'Social Media Manager' },
                { name: 'Bakr Abu', email: 'bakeradnan80@gmail.com', role: 'Photographer' },
                { name: 'Razan Shalabi', email: 'razanshalabi62@gmail.com', role: 'Videographer' },
                { name: 'Israa Mustafa', email: 'isra.moostafa@gmail.com', role: 'Graphic Design' },
                { name: 'Orooba Abuismail', email: 'oroobaa655@gmail.com', role: 'Head of PR Team' },
                { name: 'Ghada Swalha', email: 'ghada.sawallha04@gmail.com', role: 'Partnership Officer' },
                { name: 'Taima Nasser', email: 'taimanasser2989@gmail.com', role: 'Event Manager' },
                { name: 'Ahmad Hamdan', email: 'ahmadkhamdan3@gmail.com', role: 'Head of Tech Team' },
                { name: 'Dana Ismail', email: 'd1n12li45@gmail.com', role: 'Tech Team Member' }
            ]
        },
        'IEEE BZU': {
            leader: { name: 'Dalia Tiyah', email: 'dalia.tiyah@ieee.org', role: 'Chair' },
            members: [
                { name: 'Faten Sultan', email: 'Faten.sultan.02@gmail.com', role: 'Vice Chair' },
                { name: 'Mohammad Dallash', email: 'mohamad.dallash0@gmail.com', role: 'Treasurer' },
                { name: 'Omar Kashour', email: 'omarkashour45@gmail.com', role: 'CS' },
                { name: 'Osama Zeidan', email: 'osama.zeidan4@gmail.com', role: 'Member' },
                { name: 'Hussein Abu Gosh', email: 'husenabugosh@gmail.com', role: 'Member' },
                { name: 'Jehad Halahla', email: 'jehadkhaledh2002@gmail.com', role: 'RAS' },
                { name: 'Ayah Salamah', email: 'ayasalamah5@gmail.com', role: 'Member' },
                { name: 'Husni Daher', email: 'husnidhaher660@gmail.com', role: 'PES' },
                { name: 'Milad AbuAlzalof', email: 'meeladabualzuluf@gmail.com', role: 'Member' },
                { name: 'Lana Batinji', email: 'lanabatnij@gmail.com', role: 'WIE' },
                { name: 'Mai Beitnoba', email: 'maizaied03@gmail.com', role: 'Member' },
                { name: 'Leen Daraghmeh', email: 'leen.daraghmeh2004@gmail.com', role: 'Member' },
                { name: 'Shahd Khatib', email: 'shahdkhatib0@gmail.com', role: 'PR' },
                { name: 'Omar Masalmah', email: 'masalmaho64@gmail.com', role: 'Voluntary' },
                { name: 'Jana Abu Nasser', email: 'abunasserjana@gmail.com', role: 'Member' },
                { name: 'Diaa Dadaha', email: 'd.bada7a@gmail.com', role: 'Marketing' },
                { name: 'Shahd Arda', email: 'shahdarda13@gmail.com', role: 'Member' },
                { name: 'Eyab Ghafri', email: 'eyab.m.g@gmail.com', role: 'Designer' },
                { name: 'Doaa Hatu', email: 'doaahatu11@gmail.com', role: 'Member' },
                { name: 'Ahmad Bakri', email: 'rbakri9@gmail.com', role: 'Photographer' },
                { name: 'Masarra Nubani', email: 'masarranubani14@gmail.com', role: 'Video Editor' },
                { name: 'HibaTullah Jaouni', email: 'hiba.jaouni20@gmail.com', role: 'Friend of the Club' }
            ]
        },
        'Quantum Computing Club BZU': {
            leader: { name: 'Sarah Dweik', email: 'sarah.dweik@example.com', role: 'Leader' },
            members: []
        },
        'Computer Science and Cyber Security Club BZU': {
            leader: { name: 'Ammar Shobaki', email: 'shobaki123123@gmail.com', role: 'Leader' },
            members: [
                { name: 'Kareem Manasra', email: 'karem3m123@gmail.com', role: 'Member' },
                { name: 'Oroba Atallah', email: 'oroobaa655@gmail.com', role: 'Member' },
                { name: 'Rahaf Zyadeh', email: 'rahaf1234.ziadeh@gmail.com', role: 'Member' },
                { name: 'Manal Abu Baker', email: 'manalabubaker202@gmail.com', role: 'Member' },
                { name: 'Omar Shojaieh', email: 'omarshujaeih@gmail.com', role: 'Member' }
            ]
        },
        'Electrical & Computer Eng. Club BZU': {
            leader: { name: 'Anas Hawamda', email: 'anashawamda@gmail.com', role: 'President' },
            members: []
        }
    }
};

// Gaza Sky Geeks color palette
const colors = {
    primary: 'bg-blue-600',
    secondary: 'bg-orange-500',
    text: 'text-gray-800',
    background: 'bg-gray-100',
};

const Slide1 = ({ setAnimationTrigger }) => {
    useEffect(() => {
        setAnimationTrigger(true);
    }, [setAnimationTrigger]);

    return (
        <div className="text-center">
            <img src="/api/placeholder/200/100" alt="Gaza Sky Geeks Logo" className="mx-auto mb-4" />
            <h1 className={`text-4xl font-bold mb-4 animate-bounce ${colors.text}`}>University Lead Program</h1>
            <p className={`text-xl ${colors.text}`}>Empowering the Tech Leaders of Tomorrow</p>
        </div>
    );
};

const Slide2 = ({ animationTrigger }) => (
    <div className="grid grid-cols-2 gap-4">
        <div className={`${colors.primary} p-4 rounded-lg transform ${animationTrigger ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-500`}>
            <School className="mb-2 text-white" size={32} />
            <h3 className="font-bold text-lg text-white">6 Universities</h3>
            <p className="text-white">AAUP, BU, NNU, PPU, HU, BZU</p>
        </div>
        <div className={`${colors.secondary} p-4 rounded-lg transform ${animationTrigger ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-500 delay-300`}>
            <Code className="mb-2 text-white" size={32} />
            <h3 className="font-bold text-lg text-white">15+ Tech Clubs</h3>
            <p className="text-white">From IEEE to Quantum Computing</p>
        </div>
    </div>
);

const Slide3 = ({ selectedUniversity, setSelectedUniversity, selectedClub, setSelectedClub, setCurrentSlide }) => (
    <div className="space-y-4">
        <select
            className={`w-full p-2 border rounded ${colors.text}`}
            onChange={(e) => {
                setSelectedUniversity(e.target.value);
                setSelectedClub('');
            }}
            value={selectedUniversity}
        >
            <option value="">Select a University</option>
            {Object.keys(clubsData).map((uni) => (
                <option key={uni} value={uni}>{uni}</option>
            ))}
        </select>
        {selectedUniversity && (
            <select
                className={`w-full p-2 border rounded ${colors.text}`}
                onChange={(e) => {
                    setSelectedClub(e.target.value);
                    setCurrentSlide(4); // Navigate to club details slide
                }}
                value={selectedClub}
            >
                <option value="">Select a Club</option>
                {Object.keys(clubsData[selectedUniversity]).map((club) => (
                    <option key={club} value={club}>{club}</option>
                ))}
            </select>
        )}
    </div>
);

const ClubDetailsSlide = ({ selectedUniversity, selectedClub }) => {
    if (!selectedUniversity || !selectedClub) {
        return <div className={colors.text}>Please select a university and club to view details.</div>;
    }

    const clubInfo = clubsData[selectedUniversity][selectedClub];

    return (
        <div className={`space-y-4 ${colors.text}`}>
            <h3 className="text-2xl font-bold">{selectedClub}</h3>
            <h4 className="text-xl">{selectedUniversity}</h4>
            <div className="grid grid-cols-2 gap-4">
                <div className={`${colors.primary} p-4 rounded-lg text-white`}>
                    <h5 className="font-bold">Leader</h5>
                    <p>{clubInfo.leader.name}</p>
                    <p>{clubInfo.leader.email}</p>
                    <p>{clubInfo.leader.role}</p>
                </div>
                <div className={`${colors.secondary} p-4 rounded-lg text-white`}>
                    <h5 className="font-bold">Members</h5>
                    <ul className="list-disc pl-5 max-h-60 overflow-y-auto">
                        {clubInfo.members.map((member, index) => (
                            <li key={index}>{member.name} - {member.role}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ObjectivesSlide = ({ animationTrigger }) => (
    <div className={`space-y-4 ${colors.text}`}>
        <h3 className="text-2xl font-bold mb-4">Program Objectives</h3>
        <ul className="space-y-4">
            {[
                { icon: Target, text: "Foster innovation and technological advancement" },
                { icon: Users, text: "Build a strong tech community across universities" },
                { icon: Lightbulb, text: "Enhance practical skills and knowledge sharing" },
                { icon: Gift, text: "Bridge the gap between academia and industry" }
            ].map(({ icon: Icon, text }, index) => (
                <li key={index} className={`flex items-center transform ${animationTrigger ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-all duration-500`} style={{transitionDelay: `${index * 0.2}s`}}>
                    <Icon className={`mr-2 ${colors.primary} text-white p-1 rounded-full`} size={24} />
                    <span>{text}</span>
                </li>
            ))}
        </ul>
    </div>
);

const BenefitsSlide = ({ animationTrigger }) => (
    <div className={`space-y-4 ${colors.text}`}>
        <h3 className="text-2xl font-bold mb-4">Program Benefits</h3>
        <div className="grid grid-cols-2 gap-4">
            {[
                { title: "Networking", description: "Connect with peers and industry professionals" },
                { title: "Workshops", description: "Participate in hands-on technical workshops" },
                { title: "Mentorship", description: "Receive guidance from experienced mentors" },
                { title: "Projects", description: "Work on real-world projects and build your portfolio" }
            ].map(({ title, description }, index) => (
                <div key={index} className={`${colors.secondary} p-4 rounded-lg text-white transform ${animationTrigger ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-500`} style={{transitionDelay: `${index * 0.15}s`}}>
                    <h4 className="font-bold">{title}</h4>
                    <p>{description}</p>
                </div>
            ))}
        </div>
    </div>
);

const ContactSlide = () => (
    <div className={`space-y-4 ${colors.text}`}>
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <div className={`${colors.primary} p-6 rounded-lg text-white`}>
            <div className="flex items-center mb-4">
                <Mail className="mr-2" size={24} />
                <span>info@gazaskygeeks.com</span>
            </div>
            <p>Follow us on social media for updates and opportunities!</p>
            <div className="mt-4 flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((platform) => (
                    <button key={platform} className={`${colors.secondary} px-4 py-2 rounded`}>
                        {platform}
                    </button>
                ))}
            </div>
        </div>
    </div>
);

const Presentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animationTrigger, setAnimationTrigger] = useState(false);
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [selectedClub, setSelectedClub] = useState('');

    const slides = [
        { title: "University Lead Program", subtitle: "An Initiative by Gaza Sky Geeks", Component: Slide1 },
        { title: "Our Reach", Component: Slide2 },
        { title: "Program Objectives", Component: ObjectivesSlide },
        { title: "Program Benefits", Component: BenefitsSlide },
        { title: "Explore Our Clubs", Component: Slide3 },
        { title: "Club Details", Component: ClubDetailsSlide },
        { title: "Contact Us", Component: ContactSlide }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimationTrigger(false);
        setTimeout(() => setAnimationTrigger(true), 50);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setAnimationTrigger(false);
        setTimeout(() => setAnimationTrigger(true), 50);
    };

    const CurrentSlideComponent = slides[currentSlide].Component;

    return (
        <div className={`max-w-2xl mx-auto p-4 ${colors.background} rounded-lg shadow-lg`}>
            <div className="mb-4">
                <h2 className={`text-2xl font-bold text-center ${colors.text}`}>{slides[currentSlide].title}</h2>
                {slides[currentSlide].subtitle && (
                    <p className={`text-center ${colors.text}`}>{slides[currentSlide].subtitle}</p>
                )}
            </div>
            <div className="min-h-[400px] flex items-center justify-center">
                <CurrentSlideComponent
                    animationTrigger={animationTrigger}
                    setAnimationTrigger={setAnimationTrigger}
                    selectedUniversity={selectedUniversity}
                    setSelectedUniversity={setSelectedUniversity}
                    selectedClub={selectedClub}
                    setSelectedClub={setSelectedClub}
                    setCurrentSlide={setCurrentSlide}
                />
            </div>
            <div className="flex justify-between mt-4">
                <button onClick={prevSlide} className={`p-2 ${colors.primary} text-white rounded-full`}>
                    <ChevronLeft />
                </button>
                <button onClick={nextSlide} className={`p-2 ${colors.primary} text-white rounded-full`}>
                    <ChevronRight />
                </button>
            </div>
            <div className="text-center mt-4">
                Slide {currentSlide + 1} of {slides.length}
            </div>
        </div>
    );
};

export default Presentation;