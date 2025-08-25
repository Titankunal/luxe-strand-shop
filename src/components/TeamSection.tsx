import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import hairStylist from "@/assets/hair-stylist.jpg";

const TeamSection = () => {
  const successStory = {
    name: "Sarah Chen",
    role: "Lead Hair Extension Specialist", 
    experience: "8+ Years",
    story: "From struggling with thin hair to becoming our lead specialist, Sarah's journey with premium extensions transformed not only her look but her entire confidence. Her expertise now helps thousands of women discover their perfect hair solution.",
    achievements: [
      "Certified Master Stylist",
      "10,000+ Satisfied Clients", 
      "Featured in Beauty Magazine",
      "Industry Award Winner 2023"
    ],
    image: hairStylist
  };

  const teamMembers = [
    {
      name: "Emma Rodriguez",
      role: "Senior Stylist",
      specialization: "Virgin Hair Expert",
      experience: "6 years"
    },
    {
      name: "Michael Johnson", 
      role: "Color Specialist",
      specialization: "Remy Hair Matching",
      experience: "5 years"
    },
    {
      name: "Olivia Kim",
      role: "Extension Consultant",
      specialization: "Shape & Style Advisor", 
      experience: "4 years"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Success Story Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Success Story of <span className="text-gradient">Team Member</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real transformation stories from our expert team members
            </p>
          </div>

          <div className="card-luxury overflow-hidden max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={successStory.image}
                  alt={successStory.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/60 to-transparent" />
                
                {/* Floating Achievement */}
                <div className="absolute top-6 left-6">
                  <Badge className="bg-primary text-primary-foreground">
                    {successStory.experience}
                  </Badge>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
                  {successStory.name}
                </h3>
                <p className="text-primary font-semibold mb-6">{successStory.role}</p>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {successStory.story}
                </p>

                {/* Achievements */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {successStory.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium text-accent">{achievement}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" size="lg" className="w-fit">
                  Read Full Story
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Certified professionals dedicated to helping you achieve your perfect look
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="card-luxury text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-8">
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-glow">
                    <span className="text-2xl font-serif font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.specialization}</p>
                  
                  <Badge variant="secondary" className="mb-6">
                    {member.experience}
                  </Badge>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Team CTA */}
          <div className="text-center mt-16">
            <div className="card-luxury p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Ready for Your Transformation?
              </h3>
              <p className="text-muted-foreground mb-6">
                Book a free consultation with our expert team to find your perfect hair solution
              </p>
              <Button variant="luxury" size="lg">
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;