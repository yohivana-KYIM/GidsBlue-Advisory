import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Calendar, Star, CheckCircle, BookOpen, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Formations = () => {
  const formations = [
    {
      id: 1,
      title: "Pratique de l'audit interne",
      description: "Formation complète pour acquérir une compréhension opérationnelle de la fonction d'audit interne",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      duration: "4-6 semaines",
      level: "Débutant à Intermédiaire",
      participants: "Max 20 personnes",
      rating: 4.8,
      price: "Sur demande",
      format: ["100% en ligne", "Présentiel"],
      objectives: [
        "Comprendre les missions de l'audit interne",
        "Appliquer les étapes clés d'une mission",
        "Rédiger des constats d'audit pertinents",
        "Développer une posture professionnelle"
      ],
      targetAudience: "Professionnels débutants, étudiants en gestion/finance, profils en reconversion",
      included: ["Études de cas pratiques", "Plateforme pédagogique", "Certificat de formation", "Support cours"],
      popular: false
    },
    {
      id: 2,
      title: "Devenir CIA en 6 mois",
      description: "Accompagnement complet et structuré pour réussir la certification CIA (Certified Internal Auditor)",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      duration: "6 mois",
      level: "Intermédiaire à Avancé",
      participants: "Max 15 personnes",
      rating: 4.9,
      price: "Paiement échelonné possible",
      format: ["Sessions en ligne en direct", "Coaching personnalisé"],
      objectives: [
        "Maîtriser le contenu des trois parties CIA",
        "Se préparer avec méthode et outils ciblés",
        "Travailler avec QCM et examens blancs",
        "Bénéficier d'un accompagnement régulier"
      ],
      targetAudience: "Auditeurs internes, contrôleurs, étudiants en audit ou finance",
      included: ["Sessions live", "Ressources exclusives", "Examens blancs", "Coaching individuel", "Garantie réussite"],
      popular: true
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Expertise Certifiée",
      description: "Formateurs certifiés CIA avec 12+ années d'expérience"
    },
    {
      icon: Users,
      title: "Groupes Restreints",
      description: "Maximum 20 personnes pour un suivi personnalisé"
    },
    {
      icon: BookOpen,
      title: "Approche Pratique",
      description: "Études de cas réels et mises en situation"
    },
    {
      icon: CheckCircle,
      title: "Taux de Réussite",
      description: "95% de réussite aux certifications"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Header avec bannière */}
        <section className="relative h-96 bg-gradient-hero flex items-center justify-center overflow-hidden bg-blue-700">
          {/* Biscuits NDOP SVG */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <svg className="absolute top-8 left-10 w-12 h-12 opacity-20 animate-[floatBiscuits_7s_ease-in-out_infinite]" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#fff" />
            </svg>
            <svg className="absolute top-1/3 right-24 w-10 h-10 opacity-10 animate-[floatBiscuits_8s_ease-in-out_infinite]" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#fff" />
            </svg>
            <svg className="absolute bottom-10 left-1/2 w-8 h-8 opacity-10 animate-[floatBiscuits_9s_ease-in-out_infinite]" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#fff" />
            </svg>
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold font-playfair mb-6 animate-slide-up">Nos Formations</h1>
            <p className="text-xl text-blue-100 mb-8 animate-slide-up">Développez vos compétences en audit interne avec nos programmes certifiants</p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-blue-200">Taux de réussite</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-blue-200">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-blue-200">Professionnels formés</div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 py-16">
          {/* Avantages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir nos formations ?</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center p-6 shadow-card hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </Card>
              ))}
            </div>
          </section>
          {/* Formations */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Programmes de Formation</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {formations.map((formation, idx) => (
                <Card
                  key={formation.id}
                  className={`overflow-hidden shadow-float group transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up ${formation.popular ? 'ring-2 ring-primary' : ''}`}
                  tabIndex={0}
                  aria-label={formation.title}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {formation.popular && (
                    <div className="bg-primary text-white text-center py-2 font-semibold">
                      ⭐ Formation Populaire
                    </div>
                  )}
                  <div className="relative overflow-hidden">
                    <img
                      src={formation.image}
                      alt={formation.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay NDOP motif sur l'image */}
                    <svg className="absolute top-4 left-4 w-8 h-8 opacity-15" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="4" fill="#fff" />
                    </svg>
                    <svg className="absolute bottom-4 right-4 w-6 h-6 opacity-10" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="4" fill="#fff" />
                    </svg>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {formation.level}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {formation.title}
                      </h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm ml-1">{formation.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {formation.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-primary mr-2" />
                        {formation.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-primary mr-2" />
                        {formation.participants}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Objectifs :</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {formation.objectives.slice(0, 3).map((objective, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {formation.format.map((format, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                          {format}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Tarif</div>
                        <div className="font-bold text-lg">{formation.price}</div>
                      </div>
                      <Link to={`/formations/${formation.id}`}>
                        <Button className="btn-primary group" aria-label={`Découvrir la formation ${formation.title}`}>
                          Découvrir
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          {/* CTA personnalisée */}
          <section className="text-center">
            <Card className="max-w-4xl mx-auto p-8 bg-gradient-card shadow-elegant">
              <h3 className="text-2xl font-bold mb-4">Formation sur mesure</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Besoin d'une formation adaptée à votre organisation ? 
                Nous créons des programmes personnalisés selon vos besoins spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="btn-primary">
                    Demander un devis
                  </Button>
                </Link>
                <Button variant="outline">
                  Télécharger le catalogue
                </Button>
              </div>
            </Card>
          </section>
        </div>
        {/* Animation keyframes biscuits et fade-in-up */}
        <style>{`
          @keyframes floatBiscuits {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(.4,0,.2,1) both;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default Formations;