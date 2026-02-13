import { motion } from "framer-motion";
import { Heart, Award, Users, Clock } from "lucide-react";
import { config } from "../config/config";

const About = () => {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Creative Director",
      description:
        "With 10+ years in wedding stationery design, Priya brings artistic vision to every creation.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Rahul Mehta",
      role: "Printing Expert",
      description:
        "Master craftsman specializing in premium printing techniques and material selection.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ananya Patel",
      role: "Client Relations",
      description:
        "Dedicated to ensuring every client's vision is perfectly translated into their wedding stationery.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-luxury-blush via-white to-luxury-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Crafting unforgettable moments through premium wedding stationery
              since 2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-luxury-navy mb-6">
                From Passion to Perfection
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Your Wedding House is a complete wedding invitation and
                  stationery design & printing studio dedicated to making your
                  special day memorable and elegant. We specialize in customized
                  wedding cards, premium stationery, and complete wedding
                  branding solutions tailored to every couple’s style,
                  tradition, and budget. From traditional Indian wedding
                  invitations to modern minimalist and luxury designs, our team
                  carefully understands your requirements and converts your
                  ideas into beautiful printed creations. We provide end-to-end
                  services including concept design, digital invitations,
                  printing, finishing, and packaging so that you can focus on
                  enjoying your celebration while we take care of the details.
                </p>
                <p>
                  Our mission is to offer high-quality printing, creative
                  designs, and reliable service at reasonable pricing. Using
                  premium materials, advanced printing techniques, and personal
                  support, we ensure each invitation reflects the emotion,
                  culture, and uniqueness of your wedding. At Your Wedding
                  House, we don’t just print cards — we help you announce your
                  new beginning with style and perfection.
                </p>
                {/* <p>
                  Today, we combine traditional craftsmanship with modern technology to create stationery 
                  that tells your unique love story in the most beautiful way possible.
                </p> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="\images\gallery\about.png"
                  alt="Our Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-luxury-gold to-luxury-rosegold rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-luxury-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Passion",
                description:
                  "Every design is created with love and attention to detail.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description:
                  "We never compromise on quality, from materials to craftsmanship.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                description:
                  "We work closely with you to bring your vision to life.",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Timelessness",
                description:
                  "Creating designs that will be cherished for generations.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="inline-flex p-3 bg-luxury-blush text-luxury-rosegold rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-luxury-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-luxury-navy mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind every beautiful creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-luxury-gold to-luxury-rosegold rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-luxury-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-luxury-rosegold font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Create Something Beautiful Together?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's work together to design the perfect wedding stationery for
            your special day.
          </p>
          <a
            href={`https://wa.me/${
              config.whatsapp.number
            }?text=${encodeURIComponent(
              "Hello, I would like to discuss my wedding stationery needs.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white rounded-full text-lg font-semibold hover:shadow-xl"
          >
            Start Your Design Journey
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
