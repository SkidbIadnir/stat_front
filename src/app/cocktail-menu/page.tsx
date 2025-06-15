"use client";

import { useState } from "react";
import Image from "next/image";

interface Cocktail {
  id: number;
  name: string;
  description: {
    en: string;
    fr: string;
  };
  ingredients: {
    en: string[];
    fr: string[];
  };
  price?: string;
  category: 'classic' | 'signature' | 'mocktail';
  isAlcoholic: boolean;
  image: string;
}

const mockCocktails: Cocktail[] = [
  {
    id: 1,
    name: "Old Fashioned",
    description: {
      en: "A timeless classic with bourbon, sugar, and bitters",
      fr: "Un classique intemporel avec bourbon, sucre et amers"
    },
    ingredients: {
      en: ["Bourbon whiskey", "Sugar cube", "Angostura bitters", "Orange peel"],
      fr: ["Whisky bourbon", "Cube de sucre", "Amers d'Angostura", "Zeste d'orange"]
    },
    category: "classic",
    isAlcoholic: true,
    image: "/images/cocktails/old-fashioned.png"
  },
  {
    id: 2,
    name: "Mojito",
    description: {
      en: "Fresh and minty Cuban cocktail with white rum",
      fr: "Cocktail cubain frais et mentholé au rhum blanc"
    },
    ingredients: {
      en: ["White rum", "Fresh mint leaves", "Lime juice", "Sugar", "Soda water"],
      fr: ["Rhum blanc", "Feuilles de menthe fraîche", "Jus de citron vert", "Sucre", "Eau gazeuse"]
    },
    category: "classic",
    isAlcoholic: true,
    image: "/images/cocktails/mojito.png"
  },
  {
    id: 3,
    name: "Margarita",
    description: {
      en: "A zesty blend of tequila, lime, and orange liqueur",
      fr: "Un mélange zesté de tequila, citron vert et liqueur d'orange"
    },
    ingredients: {
      en: ["Tequila", "Lime juice", "Triple sec", "Salt rim"],
      fr: ["Tequila", "Jus de citron vert", "Triple sec", "Bordure de sel"]
    },
    category: "classic",
    isAlcoholic: true,
    image: "/images/cocktails/margarita.png"
  },
  // {
  //   id: 3,
  //   name: "Aperol Spritz",
  //   description: {
  //     en: "Light and refreshing Italian aperitif",
  //     fr: "Apéritif italien léger et rafraîchissant"
  //   },
  //   ingredients: {
  //     en: ["Aperol", "Prosecco", "Soda water", "Orange slice"],
  //     fr: ["Aperol", "Prosecco", "Eau gazeuse", "Tranche d'orange"]
  //   },
  //   category: "classic",
  //   isAlcoholic: true,
  //   image: "🍊"
  // },
  // {
  //   id: 4,
  //   name: "Family Sunset",
  //   description: {
  //     en: "Our signature blend of tropical flavors",
  //     fr: "Notre mélange signature de saveurs tropicales"
  //   },
  //   ingredients: {
  //     en: ["Pineapple juice", "Coconut rum", "Grenadine", "Lime juice", "Orange wheel"],
  //     fr: ["Jus d'ananas", "Rhum à la noix de coco", "Grenadine", "Jus de citron vert", "Rondelle d'orange"]
  //   },
  //   category: "signature",
  //   isAlcoholic: true,
  //   image: "🌅"
  // },
  // {
  //   id: 5,
  //   name: "Garden Gimlet",
  //   description: {
  //     en: "Herb-infused gin cocktail with cucumber",
  //     fr: "Cocktail au gin infusé aux herbes avec concombre"
  //   },
  //   ingredients: {
  //     en: ["Gin", "Fresh cucumber", "Basil leaves", "Lime juice", "Simple syrup"],
  //     fr: ["Gin", "Concombre frais", "Feuilles de basilic", "Jus de citron vert", "Sirop simple"]
  //   },
  //   category: "signature",
  //   isAlcoholic: true,
  //   image: "🌿"
  // },
  {
    id: 6,
    name: "Spiced Pear Fizz",
    description: {
      en: "Autumn-inspired cocktail with warm spices",
      fr: "Cocktail d'automne aux épices chaleureuses"
    },
    ingredients: {
      en: ["Pear brandy", "Cinnamon syrup", "Lemon juice", "Ginger beer", "Star anise"],
      fr: ["Eau-de-vie de poire", "Sirop à la cannelle", "Jus de citron", "Bière au gingembre", "Anis étoilé"]
    },
    category: "signature",
    isAlcoholic: true,
    image: "/images/cocktails/spiced-pear-fizz.png"
  },
  {
    id: 7,
    name: "Elderflower Gin Fizz",
    description: {
      en: "Refreshing gin cocktail with elderflower liqueur",
      fr: "Cocktail de gin rafraîchissant avec liqueur de fleur de sureau"
    },
    ingredients: {
      en: ["Gin", "Elderflower liqueur", "Lime juice", "Soda water", "Lime wheel"],
      fr: ["Gin", "Liqueur de fleur de sureau", "Jus de citron vert", "Eau gazeuse", "Rondelle de citron vert"]
    },
    category: "signature",
    isAlcoholic: true,
    image: "/images/cocktails/elderflower-gin-fizz.png"
  },
  {
    id: 8,
    name: "Virgin Mojito",
    description: {
      en: "All the refreshing taste without the alcohol",
      fr: "Tout le goût rafraîchissant sans l'alcool"
    },
    ingredients: {
      en: ["Fresh mint leaves", "Lime juice", "Sugar", "Soda water", "Lime wheel"],
      fr: ["Feuilles de menthe fraîche", "Jus de citron vert", "Sucre", "Eau gazeuse", "Rondelle de citron vert"]
    },
    category: "mocktail",
    isAlcoholic: false,
    image: "/images/cocktails/mojito.png"
  },
  {
    id: 9,
    name: "Aegean Cooler",
    description: {
      en: "A refreshing blend of citrus and honey",
      fr: "Un mélange rafraîchissant d'agrumes et de miel"
    },
    ingredients: {
      en: ["Kitron liqueur", "Lemon juice", "Honey syrup", "Tonic water"],
      fr: ["Liqueur de Kitron", "Jus de citron", "Sirop de miel", "Eau tonique"]
    },
    category: "signature",
    isAlcoholic: true,
    image: "/images/cocktails/aegean-cooler.png"
  },
  {
    id: 10,
    name: "Pineapple Chartreuse",
    description: {
      en: "A tropical twist with herbal notes",
      fr: "Une touche tropicale avec des notes herbacées"
    },
    ingredients: {
      en: ["Pineapple juice", "Green Chartreuse", "Lime juice", "Mint leaves"],
      fr: ["Jus d'ananas", "Chartreuse verte", "Jus de citron vert", "Feuilles de menthe"]
    },
    category: "signature",
    isAlcoholic: true,
    image: "/images/cocktails/pineapple-chartreuse.png"
  },
];

export default function CocktailMenu() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'classic' | 'signature' | 'mocktail'>('all');
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCocktail, setSelectedCocktail] = useState<string>('');
  const [customerName, setCustomerName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredCocktails = selectedCategory === 'all' 
    ? mockCocktails 
    : mockCocktails.filter(cocktail => cocktail.category === selectedCategory);

  const openOrderModal = (cocktailName: string) => {
    setSelectedCocktail(cocktailName);
    setIsModalOpen(true);
    setCustomerName('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCocktail('');
    setCustomerName('');
    setIsSubmitting(false);
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.skidhub.fr/stats/cocktail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientName: customerName.trim(),
          cocktailName: selectedCocktail
        }),
      });

      if (response.ok) {
        closeModal();
        // You could add a success message here
        alert(language === 'en' ? 'Order placed successfully!' : 'Commande passée avec succès !');
      } else {
        throw new Error('Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert(language === 'en' ? 'Failed to place order. Please try again.' : 'Échec de la commande. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const categoryLabels = {
    en: {
      all: 'All Drinks',
      classic: 'Classic Cocktails',
      signature: 'Signature Creations',
      mocktail: 'Non-Alcoholic'
    },
    fr: {
      all: 'Toutes les Boissons',
      classic: 'Cocktails Classiques',
      signature: 'Créations Signature',
      mocktail: 'Sans Alcool'
    }
  };

  const labels = {
    en: {
      title: 'Family Cocktail Menu',
      subtitle: 'Carefully crafted drinks for our special gathering. Each cocktail is made with love and the finest ingredients.',
      ingredients: 'Ingredients',
      alcoholic: 'Alcoholic',
      nonAlcoholic: 'Non-Alcoholic',
      orderNow: 'Order Now',
      orderFor: 'Order for',
      customerName: 'Customer Name',
      enterName: 'Enter your name',
      cancel: 'Cancel',
      submitOrder: 'Submit Order',
      footerTitle: 'Cheers to Family!',
      footerText: 'All cocktails are prepared fresh to order. Please let us know about any allergies or dietary restrictions.',
      footerQuote: '"Good friends, good drinks, good times - that\'s what family gatherings are all about!"'
    },
    fr: {
      title: 'Menu Cocktails Familial',
      subtitle: 'Boissons soigneusement préparées pour notre rassemblement spécial. Chaque cocktail est fait avec amour et les meilleurs ingrédients.',
      ingredients: 'Ingrédients',
      alcoholic: 'Alcoolisé',
      nonAlcoholic: 'Sans Alcool',
      orderNow: 'Commander',
      orderFor: 'Commander pour',
      customerName: 'Nom du client',
      enterName: 'Entrez votre nom',
      cancel: 'Annuler',
      submitOrder: 'Confirmer',
      footerTitle: 'Santé à la Famille !',
      footerText: 'Tous les cocktails sont préparés frais à la commande. N\'hésitez pas à nous faire savoir si vous avez des allergies ou des restrictions alimentaires.',
      footerQuote: '"Bons amis, bonnes boissons, bons moments - c\'est ça l\'esprit des rassemblements familiaux !"'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Language Toggle */}
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                language === 'en'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-600'
              }`}
            >
              🇺🇸 English
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                language === 'fr'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-600'
              }`}
            >
              🇫🇷 Français
            </button>
          </div>

          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            🍹 {labels[language].title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {labels[language].subtitle}
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categoryLabels[language]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as 'all' | 'classic' | 'signature' | 'mocktail')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-amber-500 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-600 shadow-md'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cocktail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCocktails.map((cocktail) => (
            <div 
              key={cocktail.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Cocktail Image */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
                <Image
                  src={cocktail.image}
                  alt={cocktail.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Card Header */}
              <div className={`p-6 ${
                cocktail.category === 'classic' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                cocktail.category === 'signature' ? 'bg-gradient-to-r from-purple-500 to-pink-600' :
                'bg-gradient-to-r from-green-500 to-emerald-600'
              }`}>
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {cocktail.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    cocktail.isAlcoholic 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {cocktail.isAlcoholic ? labels[language].alcoholic : labels[language].nonAlcoholic}
                  </span>
                </div>
                <p className="text-white/90 text-sm">
                  {cocktail.description[language]}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <span className="mr-2">📋</span>
                  {labels[language].ingredients}
                </h4>
                <ul className="space-y-2">
                  {cocktail.ingredients[language].map((ingredient, index) => (
                    <li 
                      key={index} 
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 flex-shrink-0"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between">
                  <div className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${
                    cocktail.category === 'classic' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                    cocktail.category === 'signature' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                  }`}>
                    {categoryLabels[language][cocktail.category]}
                  </div>
                  <button
                    onClick={() => openOrderModal(cocktail.name)}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    {labels[language].orderNow}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        {/* Order Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {labels[language].orderFor} {selectedCocktail}
                </h3>
                
                <form onSubmit={handleOrderSubmit}>
                  <div className="mb-6">
                    <label 
                      htmlFor="customerName" 
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {labels[language].customerName}
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={labels[language].enterName}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 px-4 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                      disabled={isSubmitting}
                    >
                      {labels[language].cancel}
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting || !customerName.trim()}
                    >
                      {isSubmitting ? '...' : labels[language].submitOrder}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
