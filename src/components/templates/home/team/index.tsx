import React from "react";

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
}

const TeamMemberCard: React.FC<TeamMember> = ({
  name,
  role,
  imageSrc,
  facebookLink,
  twitterLink,
  instagramLink,
}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-600 mb-2">{role}</p>
          <div className="flex justify-center space-x-4">
            <a
              href={facebookLink}
              className="text-blue-500 hover:text-blue-600"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href={twitterLink} className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href={instagramLink}
              className="text-blue-500 hover:text-blue-600"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "John Doe",
      role: "Role",
      imageSrc: "https://placeimg.com/500/500/people",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },
    {
      name: "Jane Doe",
      role: "Role",
      imageSrc: "https://placeimg.com/500/500/people",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
