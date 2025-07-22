import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Calendar, Star, CheckCircle, Download, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FormationDetail = () => {
  const { id } = useParams();

  // Données détaillées - en production viendraient d'une API
  const formationDetails = {
    1: {
      title: "Pratique de l'audit interne",
      subtitle: "Formation complète pour maîtriser les fondamentaux",
      description: "Cette formation permet d'acquérir une compréhension opérationnelle de la fonction d'audit interne. Elle combine des apports théoriques et des exercices pratiques inspirés de cas réels d'audit.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      duration: "4-6 semaines",
      level: "Débutant à Intermédiaire",
      participants: "Max 20 personnes",
      rating: 4.8,
      price: "Sur demande",
      nextSession: "15 Mars 2024",
      objectives: [
        "Comprendre les missions de l'audit interne dans la gouvernance d'une organisation",
        "Appliquer les étapes clés d'une mission d'audit (planification, exécution, rapport)",
        "Rédiger des constats d'audit clairs et pertinents",
        "Développer une posture professionnelle d'auditeur",
        "Maîtriser les normes internationales d'audit interne",
        "Utiliser les outils et techniques d'audit modernes"
      ],
      program: [
        {
          module: "Module 1: Fondamentaux de l'audit interne",
          duration: "1 semaine",
          topics: [
            "Définition et rôle de l'audit interne",
            "Les trois lignes de défense",
            "Normes professionnelles IIA",
            "Code de déontologie"
          ]
        },
        {
          module: "Module 2: Planification de la mission",
          duration: "1 semaine", 
          topics: [
            "Analyse des risques",
            "Préparation de la mission",
            "Définition des objectifs",
            "Allocation des ressources"
          ]
        },
        {
          module: "Module 3: Exécution de l'audit",
          duration: "2 semaines",
          topics: [
            "Techniques d'audit",
            "Collecte d'informations",
            "Tests de contrôle",
            "Documentation des travaux"
          ]
        },
        {
          module: "Module 4: Rapport et suivi",
          duration: "1-2 semaines",
          topics: [
            "Rédaction du rapport",
            "Communication des résultats",
            "Suivi des recommandations",
            "Évaluation de la mission"
          ]
        }
      ],
      included: [
        "Accès plateforme pédagogique 24h/7j",
        "Études de cas pratiques réelles",
        "Documents et templates d'audit",
        "Certificat de formation",
        "Support pédagogique complet",
        "Sessions de Q&A en direct",
        "Forum d'entraide entre participants"
      ],
      targetAudience: "Professionnels débutants, étudiants en gestion/finance, profils en reconversion vers l'audit",
      prerequisites: "Notions de base en gestion d'entreprise",
      certification: "Certificat de formation délivré en fin de parcours"
    },
    2: {
      title: "Devenir CIA en 6 mois", 
      subtitle: "Préparation intensive à la certification internationale",
      description: "Un accompagnement complet et structuré pour réussir la certification CIA (Certified Internal Auditor) délivrée par l'IIA, reconnue internationalement.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      duration: "6 mois",
      level: "Intermédiaire à Avancé",
      participants: "Max 15 personnes",
      rating: 4.9,
      price: "Paiement échelonné possible",
      nextSession: "1er Avril 2024",
      objectives: [
        "Maîtriser le contenu des trois parties de l'examen CIA",
        "Se préparer avec une méthode rigoureuse et des outils ciblés",
        "Travailler à l'aide de QCM, d'examens blancs et de simulations",
        "Bénéficier d'un accompagnement régulier et motivant",
        "Développer une stratégie d'examen efficace",
        "Atteindre un taux de réussite optimal"
      ],
      program: [
        {
          module: "Partie 1: Fondements de l'audit interne",
          duration: "2 mois",
          topics: [
            "Normes professionnelles",
            "Code de déontologie", 
            "Gouvernance et gestion des risques",
            "Contrôle interne"
          ]
        },
        {
          module: "Partie 2: Pratique de l'audit interne",
          duration: "2 mois",
          topics: [
            "Planification de la mission",
            "Exécution de l'audit",
            "Communication des résultats",
            "Suivi des progrès"
          ]
        },
        {
          module: "Partie 3: Connaissances métier",
          duration: "2 mois",
          topics: [
            "Gouvernance et éthique des affaires",
            "Gestion des risques",
            "Contrôles organisationnels",
            "Technologies de l'information"
          ]
        }
      ],
      included: [
        "Sessions en ligne en direct et en différé",
        "Coaching personnalisé individuel",
        "Accès ressources exclusives IIA",
        "Examens blancs illimités",
        "QCM d'entraînement (2000+ questions)",
        "Support 7j/7 par email",
        "Garantie de réussite",
        "Suivi post-formation 3 mois"
      ],
      targetAudience: "Auditeurs internes, contrôleurs, consultants, étudiants en audit ou finance",
      prerequisites: "2 ans d'expérience professionnelle recommandés",
      certification: "Certification CIA délivrée par l'IIA après réussite des 3 examens"
    }
  };

  const formation = formationDetails[id as '1' | '2'];

  if (!formation) {
    return <div>Formation non trouvée</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={formation.image}
          alt={formation.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        {/* Biscuits NDOP */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white/20 rotate-45 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair">
                {formation.title}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                {formation.subtitle}
              </p>
              <div className="flex items-center space-x-6 text-white/90">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {formation.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {formation.participants}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-2 text-yellow-400 fill-current" />
                  {formation.rating}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/formations">
            <Button variant="outline" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour aux formations
            </Button>
          </Link>
        </div>

        <div className="lg:flex lg:space-x-8">
          {/* Contenu principal */}
          <div className="lg:w-2/3">
            {/* Description */}
            <Card className="shadow-elegant p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {formation.description}
              </p>
            </Card>

            {/* Objectifs */}
            <Card className="shadow-elegant p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Objectifs pédagogiques</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {formation.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{objective}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Programme */}
            <Card className="shadow-elegant p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Programme de formation</h2>
              <div className="space-y-6">
                {formation.program.map((module, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg">{module.module}</h3>
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {module.duration}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            {/* Ce qui est inclus */}
            <Card className="shadow-elegant p-8">
              <h2 className="text-2xl font-bold mb-6">Ce qui est inclus</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {formation.included.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            {/* Inscription */}
            <Card className="shadow-card p-6 mb-8 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {formation.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  par participant
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Prochaine session</span>
                  <span className="font-semibold">{formation.nextSession}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Places disponibles</span>
                  <span className="font-semibold text-green-600">8 places</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Certification</span>
                  <span className="font-semibold">Incluse</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full btn-primary">
                  S'inscrire maintenant
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger le programme
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3">Besoin d'informations ?</h4>
                <div className="space-y-3">
                  <a href="tel:+33786800975" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                    <Phone className="h-4 w-4 mr-2" />
                    +33 786 800 975
                  </a>
                  <a href="mailto:support@cabinetaudit.cm" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                    <Mail className="h-4 w-4 mr-2" />
                    support@cabinetaudit.cm
                  </a>
                </div>
              </div>
            </Card>

            {/* Informations pratiques */}
            <Card className="shadow-card p-6">
              <h3 className="font-bold mb-4">Informations pratiques</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <strong>Public cible :</strong>
                  <p className="text-muted-foreground mt-1">{formation.targetAudience}</p>
                </div>
                <div>
                  <strong>Prérequis :</strong>
                  <p className="text-muted-foreground mt-1">{formation.prerequisites}</p>
                </div>
                <div>
                  <strong>Certification :</strong>
                  <p className="text-muted-foreground mt-1">{formation.certification}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à transformer votre carrière ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez nos formations et développez votre expertise en audit interne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-100">
              S'inscrire maintenant
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationDetail;